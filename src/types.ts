export type Event = {
  id: string;
  dateString: string;
  time: { hour: number; minute: number };
  type: string;
  duration: number;
  reminderOne: number;
  reminderTwo: number;
  comments: string;
};
