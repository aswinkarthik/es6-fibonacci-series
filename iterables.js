module.exports = {
    run: () => {
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
    }
}