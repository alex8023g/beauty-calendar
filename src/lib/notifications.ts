import {
  LocalNotifications,
  type ScheduleOptions,
} from '@capacitor/local-notifications';

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
export async function scheduleBasicNotification() {
  const now = new Date();
  const futureDate = new Date(now.getTime() + 5000); // 5 seconds from now

  const options: ScheduleOptions = {
    notifications: [
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
    ],
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
