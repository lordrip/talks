interface ElementMap {
  "a": HTMLAnchorElement;
  "div": HTMLDivElement;
  "canvas": HTMLCanvasElement;
  "input": HTMLInputElement;
}

function createElement_<K extends keyof ElementMap>(tagName: K): ElementMap[K];
function createElement_(tagName: string): HTMLElement {

  switch(tagName) {
    case 'a':
      return new HTMLAnchorElement();
    case 'div':
      return new HTMLDivElement();
    case 'canvas':
      return new HTMLCanvasElement();
    case 'input':
      return new HTMLInputElement();
    default:
      return new HTMLElement;
    }
}

const anchor = createElement_('a');
const div = createElement_('div');
const canvas = createElement_('canvas');
const input = createElement_('input');
// const customElement = createElement_('custom-element');
