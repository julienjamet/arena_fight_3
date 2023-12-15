type PowerFn = (nb: number, power: number) => number

export const iterativePower: PowerFn = (nb, power) => {
    let result: number = 1
    let i: number = 1

    if (power === 0) {
        return 1
    }

    if (power === 1) {
        return nb
    }

    while (i <= power) {
        result *= nb
        i++
    }

    return result
}