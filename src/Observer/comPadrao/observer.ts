export interface Observer {
  update(value: string): void;
}

export interface Subject {
  addObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notify(): void;
}
