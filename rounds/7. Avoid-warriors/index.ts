type Runway = [number, number][]
type AvoidTheWarriorsFn = (runway: Runway) => number

export const avoidTheWarriors: AvoidTheWarriorsFn = (runway) => {
    let Y: number = runway.length - 1
    let X: number = 0
    let moves: number = 0

    if (runway[0][0] === 1 || runway[0][1] === 1 || runway[Y][0] === 1 || runway[Y][1] === 1) {
        return -1
    }

    while (Y !== 0) {

        if (runway[Y - 1][0] === 1 && runway[Y - 1][1] === 1) {
            return -1
        }

        if (X === 0 && runway[Y - 1][0] === 1 && runway[Y][1] === 1) {
            return -1
        }

        if (X === 1 && runway[Y - 1][1] === 1 && runway[Y][0] === 1) {
            return -1
        }

        while (Y - 1 !== -1 && runway[Y - 1][X] === 0) {
            Y--
        }
    
        if (Y - 1 !== -1 && runway[Y - 1][X] !== 0) {
    
            if (X === 0 && runway[Y][1] !== 1) {
                X = 1
                moves++
            }
            else if (X === 1 && runway[Y][0] !== 1) {
                X = 0
                moves++
            }
        }
    }

    if (Y === 0 && X === 1) {
        moves++
    }

    return moves
}