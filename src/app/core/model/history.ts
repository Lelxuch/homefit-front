export interface IHistory {
  id: number;
  dateTime: Date;
  exercise: string;
  src: string;
}

export interface IHistoryItem {
  id: number;
  dateTime: Date;
  exercise: string;
  video: string;
  count: number;
  accuracy: number;
  calories: number;
}
