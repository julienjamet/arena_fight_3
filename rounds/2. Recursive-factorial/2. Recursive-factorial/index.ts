type FactorialFn = (nb: number) => number

export const recursiveFactorial: FactorialFn = (nb) => {
    let result: number

    if (nb === 0) {
        return 1
    }

    result = nb * recursiveFactorial(nb - 1)

    return result
}