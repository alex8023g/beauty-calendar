import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage.tsx';
import { useEventsStore } from './stores/zuStore.ts';
import { requestNotificationPermissions } from './lib/localNotifications.ts';
import { LocalNotifications } from '@capacitor/local-notifications';
import { getEventsFromLocalStorage } from './stores/localStore.ts';
import { EventsListPage } from './pages/EventsListPage.tsx';
import { RootLayout } from './components/RootLayout.tsx';

requestNotificationPermissions();
const events = await getEventsFromLocalStorage();
useEventsStore.setState({ events });
LocalNotifications.getPending().then((notifications) => {
  console.log('Pending notifications!!: ', notifications);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/list' element={<EventsListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
