


const node = (x,l = null,r = null) => {
    return { d : x, left: l, right: r }
}

const isBalanced = (n) => {
    if(n == null) {
        return true
    }
    const levelDiff = Math.abs(score(n.left) - score(n.right))
    if(levelDiff > 1) {
        return false
    }
    return isBalanced(n.left) && isBalanced(n.right)
}

const score = (n) => {
    if(n == null) {
        return 0;
    }
    return 1 + Math.max(score(n.left), score(n.right))
}


//         1
//     2         3
//   4   5    6     7
// 8 
//9

//const r = node(1, node(2,node(4,node(8,null,null),null), node(5)), node(3,node(6),node(7)) )
const r = node(1, node(2,node(4,node(8,node(9),null),null), node(5)), node(3,node(6),node(7)) )
console.log(isBalanced(r))

