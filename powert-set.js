
const Empty = Symbol()

const powerset = ([x = Empty,...xs]) => {
    if(x == Empty) {
        return [[]]
    }
    const set = powerset(xs)
    const r = set.map((s)=>{
        return [x,...s]
    })
    return [...r,...powerset(xs)]
}

console.log(powerset(['a','b','c','d']))