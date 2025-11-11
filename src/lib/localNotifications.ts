import type { Event } from '@/types';
import {
  LocalNotifications,
  type ScheduleOptions,
} from '@capacitor/local-notifications';
import dayjs from 'dayjs';

// 1. Request notification permissions (iOS will prompt the user on the first call)
export async function requestNotificationPermissions() {
  const status = await LocalNotifications.requestPermissions();
  if (status.display === 'granted') {
    console.log('Notification permissions granted');
  } else {
    console.log('Notification permissions denied');
  }
}

// 2. Schedule a local notification to fire in 5 seconds
export async function scheduleBasicNotification({
  events,
}: {
  events: Event[];
}) {
  console.log('🚀 ~ scheduleBasicNotification ~ events:', events);
  // const now = new Date();
  // const futureDate = new Date(now.getTime() + 20000);

  const notifications = events
    .filter(
      (event) =>
        dayjs(event.dateString)
          .set('hour', event.time.hour)
          .set('minute', event.time.minute)
          .valueOf() > dayjs().valueOf(),
    )
    .map((event, i) => {
      const eventDate = new Date(event.dateString);
      eventDate.setHours(event.time.hour, event.time.minute, 0);
      return {
        title: `Напоминаем`,
        body: `Вы записаны на ${event.type} ${event.dateString} в ${event.time.hour}:${String(event.time?.minute).padStart(2, '0')}`,
        id: i + 1, // Unique identifier for the notification
        schedule: {
          at: eventDate,
        },
        sound: 'beep.wav',
      };
    });

  /*  const notifications = [
    {
      title: 'My First Notification',
      body: 'This is a local notification example for iOS.',
      id: 1, // Unique identifier for the notification
      schedule: {
        at: futureDate, // Schedule at a specific date/time
        // Optionally, you can set 'every' for repeating notifications (e.g., 'day', 'week')
      },
      sound: 'beep.wav', // Optional: requires placing a sound file in the appropriate native resource folder
      // extra: {
      //   data: 'Any extra data you want to pass'
      // }
    },
  ]; */
  console.log('🚀 ~ scheduleBasicNotification ~ notifications:', notifications);

  const options: ScheduleOptions = {
    notifications,
  };

  await LocalNotifications.schedule(options);
  console.log('Notification scheduled');
}

// 3. Add a listener for when a user interacts with a notification
LocalNotifications.addListener(
  'localNotificationActionPerformed',
  (notificationAction) => {
    console.log(
      `Notification action performed: ${notificationAction.actionId}`,
    );
    console.log('Notification details:', notificationAction.notification);
  },
);
