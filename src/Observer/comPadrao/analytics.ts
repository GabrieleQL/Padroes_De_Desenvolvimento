import { Observer } from './observer';

export class Analytics implements Observer {
  update(value: string): void {
    console.log(`[ANALYTICS] evento: texto_alterado -> "${value}"`);
  }
}
