# AI Coding Agent Instructions for Beauty Calendar

## Project Overview

Beauty Calendar is a **React + TypeScript + Capacitor** mobile-web hybrid application for scheduling beauty services (haircuts, manicures, etc.) with built-in local notifications and persistent storage. The app targets iOS (via Capacitor) and runs as a Vite-powered SPA.

**Key Stack**: React 19, TypeScript, Tailwind CSS 4, Zustand (state), Capacitor 7, Vite, dayjs

## Architecture & Data Flow

### Core Components Hierarchy

```
HomePage
  └─ Calendars (main container)
      ├─ MonthCalendar (displays months with events)
      │   ├─ Hour (time slot in day)
      │   └─ DayBtn (clickable day with event count)
      ├─ EventDetails (create/edit dialog)
      ├─ SelectEventType (dropdown for service types)
      └─ DaySchedule (time grid view for selected day)
```

### State Management (Zustand Store)

All state lives in `src/store/store.ts` via `useEventsStore`. **Critical patterns**:

- `events: Event[]` – Persisted to `Preferences` (capacitor), NOT localStorage
- `selectedEvent: Event` – Currently editing event (defaults to `defaultEvent` from `constants.ts`)
- Write to Preferences in components: `Preferences.set({ key: 'events', value: JSON.stringify(events) })`
- Example: After adding/deleting events, sync with native storage immediately

### Data Model

```typescript
type Event = {
  id: string; // nanoid() for uniqueness
  dateString: string; // ISO date: "2025-01-15"
  time: { hour: number; minute: number };
  type: string; // e.g., "Маникюр", "Причёска"
  duration: number; // in hours
  remainderOne: number; // minutes before event
  remainderTwo: number; // additional reminder in minutes
};
```

### Calendar Generation

- `createYearCalendar({ year, days })` → `Month[]` structure
- `createDaysArr({ year })` → async function fetching/computing available days
- Run at app init in `Calendars.tsx` useEffect (hardcoded 2025)
- These are utility functions in `src/lib/` – modify for dynamic year selection

## Critical Developer Workflows

### Build & Run

```bash
npm run dev          # Vite dev server (HMR enabled)
npm run build        # TypeScript check + Vite bundle → dist/
npm run lint         # ESLint validation
npm run preview      # Preview dist locally before deployment
```

### iOS Native Build

```bash
npx cap sync ios     # Sync web assets to Xcode project
npx cap open ios     # Open Xcode for native compilation
```

After `npm run build`, **always** run `npx cap sync ios` before pushing to Xcode.

### Persistent Storage Pattern

Events are **NOT** saved to localStorage; they use **Capacitor Preferences API**:

1. On app init (`main.tsx`): `Preferences.get({ key: 'events' })` → load into Zustand
2. After mutation (add/delete): `Preferences.set({ key: 'events', value: JSON.stringify(...) })`
3. Find all Preferences calls: grep `"events"` in components

### Local Notifications

- File: `src/lib/localNotifications.ts`
- `requestNotificationPermissions()` called on app boot (iOS prompts user)
- `scheduleBasicNotification({ events })` creates native notifications 2 hours before event
- Uses `dayjs` for date arithmetic (avoid raw Date when possible)
- Notifications scheduled as `ScheduleOptions` with native sound reference

## Project-Specific Conventions

### TypeScript Imports

- Use path alias `@/` for `src/` imports: `import { useEventsStore } from '@/store/store'`
- Configured in `vite.config.ts` and `tsconfig.json`

### UI Component Pattern

- **UI components** (dialog, button, sheet) live in `src/components/ui/`
- Built with Radix UI + Headless UI + TailwindCSS
- Example: `Dialog` from `@radix-ui/react-dialog` wrapped with Tailwind styling
- Use `clsx` + `tailwind-merge` for conditional class composition

### Event Type Enum

- Event types are hardcoded strings (e.g., "Маникюр") – not a TypeScript enum
- Default event type defined in `constants.ts` as `defaultEvent.type`
- If adding new types, update `SelectEventType.tsx` dropdown options

### Day/Time Utilities

- Use **dayjs** (lighter than moment.js) for all date operations
- Example: `dayjs(event.dateString).set('hour', event.time.hour).set('minute', event.time.minute).valueOf()`
- Avoid native `Date` object except when interfacing with Capacitor APIs

### Tailwind Configuration

- Tailwind CSS v4 with zero-runtime (via `@tailwindcss/vite` plugin)
- Use standard utilities; no custom theme overrides discovered
- Dark mode classes present: `dark:` prefix for theme variants

## Integration Points & Dependencies

### Capacitor Plugins Used

- `@capacitor/local-notifications` – Schedule reminders
- `@capacitor/preferences` – Persist events across app restarts
- `@capacitor/ios` – iOS runtime
- `@capacitor/keyboard` – Keyboard visibility on mobile
- `@capacitor/app`, `@capacitor/haptics`, `@capacitor/status-bar` – Native API wrappers

### Key Libraries

- **dayjs** – Date manipulation (NOT momentjs)
- **nanoid** – Generate unique event IDs
- **zustand** – State management (simpler than Redux)
- **lucide-react** – Icons library
- **react-router v7** – Routing (minimal usage; mostly single page)

### Cross-Component Communication

- **No prop drilling**: Use Zustand directly in components: `const { events, addEvent } = useEventsStore()`
- Avoid passing callbacks; dispatch actions to store
- Selected event flow: `setSelectedEvent(event)` → `EventDetails` reads `selectedEvent` from store

## Common Tasks & Patterns

### Add New Event Type

1. Update `SelectEventType.tsx` dropdown options
2. Update `defaultEvent.type` in `constants.ts` if changing default
3. No enum/const needed (string-based for simplicity)

### Modify Notification Timing

1. Edit `scheduleBasicNotification()` in `src/lib/localNotifications.ts`
2. Change line: `eventDate.setHours(event.time.hour - 2, ...)` (currently -2 hours)
3. Rebuild and sync: `npm run build && npx cap sync ios`

### Persist New Event Field

1. Update `Event` type in `types.ts`
2. Update `defaultEvent` in `constants.ts`
3. Components automatically serialize via `JSON.stringify(events)`
4. **No schema migrations needed** (native Preferences API)

### Debug Event State

- Check Zustand state: `window.__ZUSTAND__` in DevTools console (if enabled)
- Check native storage: `Preferences.get({ key: 'events' })` in browser console
- Check pending notifications: Already logged in `main.tsx`: `LocalNotifications.getPending()`

## Notes for Next Steps

- Year selection is hardcoded (2025) in `Calendars.tsx` – make dynamic if needed
- Redux DevTools commented out in `store.ts` – uncomment for debugging
- `experiments.ts` is a scratch file, not imported anywhere
- ESLint rules are minimal; consider adding stricter type-checked rules per README recommendations
