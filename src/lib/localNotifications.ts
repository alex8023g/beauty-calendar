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

  let notifications = events
    .filter(
      (event) =>
        dayjs(event.dateString)
          .set('hour', event.time.hour)
          .set('minute', event.time.minute)
          .valueOf() > dayjs().valueOf(),
    )
    .map((event, i) => {
      const eventDate = new Date(event.dateString);
      if (event.reminderOne % 1 === 0) {
        // whole hours
        eventDate.setHours(
          event.time.hour - event.reminderOne,
          event.time.minute,
          0,
        );
      } else {
        // half hours
        eventDate.setHours(
          event.time.hour - Math.trunc(event.reminderOne),
          event.time.minute - 30,
          0,
        );
      }
      return {
        title: `Напоминание бьюти-календаря`,
        body: `Вы записаны: ${event.type} ${dayjs(event.dateString).format('DD.MM.YYYY')} в ${event.time.hour}:${String(event.time?.minute).padStart(2, '0')}`,
        id: i + 1, // Unique identifier for the notification
        schedule: {
          at: eventDate,
        },
        sound: 'beep.wav',
      };
    });

  notifications = notifications.concat(
    notifications.map((notification) => ({
      ...notification,
      id: notification.id + 1000,
      schedule: {
        at: dayjs(notification.schedule.at)
          .subtract(1, 'day')
          .add(2, 'hour')
          .toDate(),
      },
    })),
  );

  console.log('🚀 ~ scheduleBasicNotification ~ notifications:', notifications);

  const options: ScheduleOptions = {
    notifications: notifications.filter(
      (notification) =>
        dayjs(notification.schedule.at).valueOf() > dayjs().valueOf(),
    ),
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
