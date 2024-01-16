type FibonacciFn = (n: number) => number

export const fibonacci: FibonacciFn = (n) => {
    let result: number

    if (n < 0) {
        return n
    }

    result = fibonacci(n - 1) + fibonacci(n - 2)

    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    return result
}