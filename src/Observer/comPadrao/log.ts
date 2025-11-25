import { Observer } from './observer';

export class Log implements Observer {
  update(value: string): void {
    console.log(`[LOG] texto registrado: ${value}`);
  }
}
