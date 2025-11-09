import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage.tsx';
import { Preferences } from '@capacitor/preferences';
import { useEventsStore } from './store/store.ts';
import {
  requestNotificationPermissions,
  scheduleBasicNotification,
} from './lib/notifications.ts';

const { value } = await Preferences.get({ key: 'events' });
if (value) {
  useEventsStore.setState({ events: JSON.parse(value) });
}

requestNotificationPermissions();
scheduleBasicNotification();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
