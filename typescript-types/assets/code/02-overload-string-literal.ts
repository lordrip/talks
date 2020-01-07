type ElementsNames = 'a' | 'div' | 'canvas';
type Elements = HTMLAnchorElement | HTMLDivElement | HTMLCanvasElement;

type CreateNodeFn = {
  (elemName: 'a'): HTMLAnchorElement;
  (elemName: 'div'): HTMLDivElement;
  (elemName: 'canvas'): HTMLCanvasElement;
}

const createNode: CreateNodeFn = (elemName: ElementsNames): any => {

  switch(elemName) {
    case 'a':
      return new HTMLAnchorElement();
    case 'div':
      return new HTMLDivElement();
    case 'canvas':
      return new HTMLCanvasElement();
  }

}

const anchorNode = createNode('a');
const divNode = createNode('div');
const canvasNode = createNode('canvas');

// const errNode = createNode('error-tag');
