---
theme : "black"
transition: "zoom"
highlightTheme: "atom-one-dark"
logoImg: "https://raw.githubusercontent.com/evilz/vscode-reveal/master/images/logo-v2.png"
slideNumber: true
---

# RxJS Marble Testing

<span>Another way to test streams</span>


<small>Ricardo Martinez [@lordrip](http://twitter.com/lordrip)</small>

---

## Who am I?

Myself, who else? ;-)

---

### A Simple stream

<pre><code class="hljs javascript">
const getSimpleStream = () => of('a');
</code></pre>

--

### Test with jest native approach

<pre><code class="hljs javascript">
it('native approach', async () => {
  return expect(getSimpleStream().toPromise())
    .resolves.toEqual('a');
});
</code></pre>

--

### Another approach

<pre><code class="hljs javascript">
it('another approach', (done) => {
  testClass.getSimpleStream()
    .subscribe((value) => {
      expect(value)
        .toEqual('a');

      done();
    });
});
</code></pre>

---

### A little bit more complex stream

<pre><code class="hljs javascript">
const getSimpleStream = () => from([ 'hi!', 'bye!' ]);
</code></pre>

--

### Test with jest native approach

<pre><code class="hljs javascript">
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
</code></pre>


---

## Composed stream

<pre><code class="hljs javascript">
const getComposedStream = () =>
  from([ 'hi!', 'bye!' ])
    .pipe(delay(100));
</code></pre>

--

## How can we test it? 👀

<iframe src="https://giphy.com/embed/10yIEN8cMn4i9W" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

--

## Here is when Marbles Testing comes in! 💪

<iframe src="https://giphy.com/embed/3IHn3O6Mnmquk" width="480" height="222" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

--

## With Marbles testing

<pre><code class="hljs javascript">
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
</code></pre>

---

## A liiiitle bit more complex scenario

<pre><code class="hljs javascript">
const getComposedStream = () =>
  from([ 'hi!', 'bye!' ])
    .pipe(
      concatMap((value) =>
        of(value)
          .pipe(delay(100)))
    );
</code></pre>

--

## With Marbles testing again 💪

<pre><code class="hljs javascript">
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
</code></pre>

---

## Wrap up
