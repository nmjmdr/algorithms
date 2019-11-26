
const Empty = Symbol('Empty')

const intersection = ([x = Empty,...xs], [y = Empty,...ys]) => {
    if(x == Empty || y == Empty) {
        return []
    }
    if(x === y) {
        // does not handle duplicates
        return [x, ...intersection(xs,ys)]
    } else if (x < y) {
        return intersection(xs,[y,...ys])
    } else {
        return intersection([x,...xs],ys)
    }
}
// Works with duplicates
const _intersection = ([x = Empty,...xs], [y = Empty,...ys]) => {
    if(x == Empty || y == Empty) {
        return []
    }
    if(x === y) {
        // does not handle duplicates
        const [n = Empty,...ns] = _intersection(xs,ys)
        return x !== n && n !== Empty ? [x,n,...ns] : [x,...ns]
    } else if (x < y) {
        return _intersection(xs,[y,...ys])
    } else {
        return _intersection([x,...xs],ys)
    }
}

console.log(_intersection([1,2,4,4,6],[1,4,4,6,10,12]))