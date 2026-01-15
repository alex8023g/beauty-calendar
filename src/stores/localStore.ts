import ICloud from '@/plugins/icloud-plugin/iCloudPlugin';
import type { Event } from '@/types';
// import { Preferences } from '@capacitor/preferences';

export async function saveEventsToLocalStorage(events: Event[]) {
  try {
    const value = JSON.stringify(events);
    // await Preferences.set({
    await ICloud.set({
      key: 'events',
      value,
    });
  } catch (e) {
    console.error('Error saving events to local storage', e);
  }
}

export async function getEventsFromLocalStorage(): Promise<Event[]> {
  try {
    // const res = await Preferences.get({ key: 'events' });
    const res = await ICloud.get({ key: 'events' });
    if (res.value) {
      const events = JSON.parse(res.value) as Event[];
      return events;
    } else {
      return [];
    }
  } catch (e) {
    console.error('Error getting events from local storage', e);
    return [];
  }
}
