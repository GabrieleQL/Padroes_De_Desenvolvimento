import { Observer, Subject } from './observer';

export class Editor implements Subject {
  private text: string = '';
  private observers: Observer[] = [];

  addObserver(o: Observer): void {
    if (!this.observers.includes(o)) {
      this.observers.push(o);
    }
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter(obs => obs !== o);
  }

  notify(): void {
    for (const obs of this.observers) {
      try {
        obs.update(this.text);
      } catch (err) {
        console.error('[Editor] Erro ao notificar observer:', err);
      }
    }
  }

  changeText(newText: string): void {
    this.text = newText;
    this.notify();
  }

  getText(): string {
    return this.text;
  }
}
