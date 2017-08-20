module.exports = class FibonacciGenerator {
    * [Symbol.iterator]() {
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
}