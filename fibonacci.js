module.exports = class FibonacciGenerator {
    constructor() {
        this.first = 1;
        this.second = 1;
        this.third = 0;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                let result = { value: this.first, done: false };
                this.third = this.first + this.second;
                this.first = this.second;
                this.second = this.third;
                return result;
            }
        }
    }
}