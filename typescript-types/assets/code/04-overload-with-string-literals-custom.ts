interface TranslationMap {
  hola: 'hello';
  adios: 'bye';
  cielo: 'sky';
};

function translateWord<K extends keyof TranslationMap>(word: K): TranslationMap[K];
function translateWord(word: string): string {

  switch (word) {
    case 'hola':
      return 'hello';

    case 'adios':
      return 'bye';

    case 'cielo':
      return 'sky';

    default:
      return '';
  }

}

const hola = translateWord('hola');
const adios = translateWord('adios');
const cielo = translateWord('cielo');
// const random = translateWord('random');
