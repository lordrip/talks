/*
DISCLAIMER: THIS WILL BE BETTER IMPLEMENTED USING GENERICS
            THIS IS ONLY FOR DEMOSTRATION PURPOSES
            f.i. filterFn(arr: T[], filter): T[] { ... }
*/

type FilterFunction = {
  (list: string[], filterKey: string): string[];
  (list: number[], filterKey: number): number[];
}

const filterImpl: FilterFunction = (list: string[] | number[], filterKey: string | number) => {
  return [];
}

const stringArr = filterImpl(['word A', 'word B'], 'word B');
const numberArr = filterImpl([1, 2], 1);

// const errorStringArr = filterImpl(['word A', 'word B'], 100);
// const errorNumberArr = filterImpl([1, 2], 'word');
