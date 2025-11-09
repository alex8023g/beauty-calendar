export type Event = {
  id: string;
  dateString: string;
  time: { hour: number; minute: number };
  type: string;
  duration: number;
  remainderOne: number;
  remainderTwo: number;
};
