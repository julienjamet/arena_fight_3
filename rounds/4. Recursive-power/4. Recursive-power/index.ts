type PowerFn = (nb: number, power: number) => number

export const recursivePower: PowerFn = (nb, power) => {
    let result: number

    if (nb === 0) {
        return 0
    }

    if (power === 0) {
        return 1
    }

    result = nb * recursivePower(nb, power - 1)

    return result
}