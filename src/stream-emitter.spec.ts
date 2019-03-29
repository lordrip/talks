import { TestStreamClass } from "./stream-emitter";

describe('Testing TestStreamClass', () => {
  let testClass: TestStreamClass;

  beforeEach(() => {
    testClass = new TestStreamClass();
  });

  describe('Simple streams', () => {
    it('native approach', async () => {
      return expect(testClass.getSimpleStream().toPromise())
        .resolves.toEqual('a');
    });

    it('another approach', (done) => {
      testClass.getSimpleStream()
        .subscribe((value) => {
          expect(value)
            .toEqual('a');

          done();
        });
    });
  });

  describe('Composed streams', () => {
    it('native approach', () => {
      let index = 0;

      testClass.getComposedStream()
        .subscribe((value) => {
          const expected = index === 0 ? 'hi!' : 'bye!';
          index++;

          expect(value)
            .toEqual(expected);
        });
    });
  });

  describe('Composed streams', () => {
    it('with marbles 😃', () => {
      let index = 0;

      testClass.getComposedStream()
        .subscribe((value) => {
          const expected = index === 0 ? 'hi!' : 'bye!';
          index++;

          expect(value)
            .toEqual(expected);
        });
    });
  });

});
