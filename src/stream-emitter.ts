import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

export class TestStreamClass {
  getSimpleStream() {
    return of('a');
  }

  getComposedStream() {
    return from([ 'hi!', 'bye!' ]);
  }

  getTimedStream() {
    return from([ 'hi!', 'bye!' ])
      .pipe(
        delay(100),
      );
  }

  getConcatStream() {
    return from([ 'hi!', 'bye!' ])
      .pipe(
        concatMap((value) =>
          of(value)
            .pipe(delay(100)))
      );
  }

}
