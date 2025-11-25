import { Editor } from './editor';
import { Log } from './log';
import { Display } from './display';
import { Analytics } from './analytics';

console.log('--- Teste: com Observer ---');

const editor = new Editor();

const log = new Log();
const display = new Display();
const analytics = new Analytics();

editor.addObserver(log);
editor.addObserver(display);
editor.addObserver(analytics);

editor.changeText('Hello world!');
editor.changeText('Hello world!');

editor.removeObserver(analytics);

editor.changeText('Segunda atualização');

editor.addObserver(display);
editor.addObserver(display);

editor.changeText('Teste final');
