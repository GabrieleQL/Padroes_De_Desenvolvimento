import { Observer } from './observer';

export class Display implements Observer {
  update(value: string): void {
    console.log(`[DISPLAY] atualizando visual: ${value}`);
  }
}
