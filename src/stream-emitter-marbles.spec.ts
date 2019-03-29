import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { TestScheduler } from 'rxjs/testing';
import { TestStreamClass } from './stream-emitter';

describe('Testing TestStreamClass', () => {
  let testClass: TestStreamClass;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testClass = new TestStreamClass();
    testScheduler = new TestScheduler((received, expected) => {
      expect(received)
        .toEqual(expected);
    });
  });

  describe('Simple streams', () => {
    it('with marbles 😃', async () => {
      testScheduler.run((helpers: RunHelpers) => {
        const { expectObservable } = helpers;

        const obs = testClass.getSimpleStream();
        const marbles = '(a|)';

        expectObservable(obs)
          .toBe(marbles);
      });
    });
  });

  describe('Composed streams', () => {
    it('with marbles 😃', () => {
      testScheduler.run((helpers: RunHelpers) => {
        const { expectObservable } = helpers;
        const obs = testClass.getComposedStream();
        const marbles = '(01|)';
        const marbleValues = [ 'hi!', 'bye!' ];

        expectObservable(obs)
          .toBe(marbles, marbleValues);
      });
    });
  });

  describe('Timed streams', () => {
    it('with marbles 😃', () => {
      testScheduler.run((helpers: RunHelpers) => {
        const { expectObservable } = helpers;
        const obs = testClass.getTimedStream();
        const marbles = '100ms (01|)';
        const marbleValues = [ 'hi!', 'bye!'];

        expectObservable(obs)
          .toBe(marbles, marbleValues);
      });
    });

    it('with marbles 😃', () => {
      testScheduler.run((helpers: RunHelpers) => {
        const { expectObservable } = helpers;
        const obs = testClass.getConcatStream();
        const marbles = '100ms 0 99ms (1|)';
        const marbleValues = [ 'hi!', 'bye!'];

        expectObservable(obs)
          .toBe(marbles, marbleValues);
      });
    });
  });

});
