class Logger {
  registrar(texto: string) {
    console.log(`[LOGGER] Registrando texto: ${texto}`);
  }
}

class Display {
  atualizar(texto: string) {
    console.log(`[DISPLAY] Mostrando texto: ${texto}`);
  }
}

class Editor {
  private text: string = '';

  changeText(newText: string) {
    this.text = newText;

    const logger = new Logger();
    logger.registrar(this.text);

    const display = new Display();
    display.atualizar(this.text);
  }
}

const editor = new Editor();

console.log('--- Teste: sem padrão ---');
editor.changeText('Hello world!');

editor.changeText('Olá mundo!');
