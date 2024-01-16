type Corridor = number[]
type ExitTheCorridorFn = (corridor: Corridor) => number

export const exitTheCorridor: ExitTheCorridorFn = (corridor) => {
    let index: number = 0
    let i: number = corridor[index]

    let moves: number = 0
    let loopControl: number[] = []

    while (i === 0) {

        if (loopControl[index] === index) {
            return 0
        }

        moves++

        loopControl[index] = index

        index++
        i = corridor[index]

        if (i !== 0) {

            if (i < 0 || i > corridor.length - 1) {
                return 0
            }

            index = i
            i = corridor[index]
        }
    }

    return moves
}