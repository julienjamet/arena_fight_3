type FactorialFn = (nb: number) => number

export const iterativeFactorial: FactorialFn = (nb) => {
    let factorial: number = 1
    let i: number = 1

    while (i <= nb) {
        factorial *= i
        i++
    }

    if (nb < 0) {
        return 0
    }
    else if (nb === 0) {
        return 1
    }
    else {
        return factorial
    }
}