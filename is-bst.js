
const node = (x, l = null, r = null) => { 
    return { 
        d: x, 
        left: l, 
        right: r
    }
}

const isBst = (n) => {
    if(n == null) {
        true
    }
    if(n.left && n.left.d > n.d) {
        return false
    }
    if(n.right && n.right.d < n.d) {
        return false
    }
    return isBst(n.left) && isBst(n.right)
}

