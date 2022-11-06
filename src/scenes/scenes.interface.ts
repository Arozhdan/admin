export interface IScene {
  id: number;
  parent: string | null;
  children: {
    id: number;
    title: string;
    to: string;
    icon: JSX.Element;
  }[];
}
export interface ICalendarEvent {
  id: string;
  title: string;
  date: string;
}
export interface IFaqItem {
  id: number;
  title: string;
  body: string;
}
