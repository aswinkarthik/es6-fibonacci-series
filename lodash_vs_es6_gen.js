module.exports = {
    run: () => {
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
    }
}
