# ES6 Symbol.Iterator

Trying out ES6 Symbol.Iterator features for generating fibonacci series.

## Usage

- `npm install`
- `npm start`

## More information

### _iterables.js_

Has two types of genarators.

- One using `next()` method
- One using a function pointer with `yield`

### _lodash_vs_es6_gen.js_

- Comparing chaining of operations over a fibonacci series using `.map()`, `.filter()` and `.forEach()`
- _Lodash_: Using a static list for lodash as it has no support to iterate over `Symbol.Iterator`.
- _ES6_: Doesn't give `map`, `filter` and `forEach` and hence using `wu.js` for iterating over lazy evaluated streams.
