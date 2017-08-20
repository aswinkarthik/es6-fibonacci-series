const print = (all, limit = 10) => {
    let counter = 0
    for (let e of all) {
        console.log(e)
        counter += 1
        if (counter > limit) {
            break;
        }
    }
    console.log("\n")
}

// Style 1
let elements1 = {}
elements1[Symbol.iterator] = () => {
    let first = 1, second = 1
    return {
        next: () => {
            let result = { value: first, done: false }
            let third = first + second
            first = second
            second = third
            return result
        }
    }
}

console.log("Style 1 Output:\n")
print(elements1)
// Style 2

let elements2 = {}
elements2[Symbol.iterator] = function* () {
    let first = 1, second = 1, third = 0
    yield first
    yield second
    while (true) {
        third = first + second
        first = second
        second = third
        yield third
    }
}

console.log("Style 2 Output:\n")
print(elements2)


console.log("\nLodash vs es6\n")
const _ = require('lodash')
const FibonacciGenerator = require('./fibonacci.js')

console.log("\n Using lodash")

let elements3 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
_(elements3)
    .map(e => e * e)
    .filter(e => e % 2 == 0)
    .forEach(e => { console.log(e) })

console.log("\nUsing Es6 generator with WU.js")

const fib = new FibonacciGenerator();
const stream = require('wu')

stream(fib)
    .filter(e => e % 2 == 0)
    .takeWhile(n => n <= 89)
    .map(e => e * e)
    .forEach(e => console.log(e))