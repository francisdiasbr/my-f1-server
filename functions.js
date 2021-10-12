const tablePoints = {
    1: { points: 25 },
    2: { points: 18 },
    3: { points: 15 },
    4: { points: 12 },
    5: { points: 10 },
    6: { points: 8 },
    7: { points: 6 },
    8: { points: 4 },
    9: { points: 2 },
    10: { points: 1 },
    11: { points: 0 }
}
const calcPoints = (pos) => {
    let points = 0
    if(pos < 11) {
        points = tablePoints[pos]
    }
    return points
}
module.exports = { calcPoints }
