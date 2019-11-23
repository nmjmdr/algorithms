const node = (x, l, r) => {
    return {
        d: x,
        left: l,
        right: r,
    }
}

const traverse = (root) => {
    const q = queue(100)
    q.queue(root)
    while(true) {
        const n = q.dequeue()
        if(n == null) {
            return
        }
        console.log(n.d)
        if(n.left) {
            q.queue(n.left)
        }
        if(n.right) {
            q.queue(n.right)
        }
    }
}


const queue = (capacity) => {
    let buf = Array(capacity)
    let head = 0;
    let tail = 0;
    let n = 0;
    return {
        queue: (x) => {
            buf[head] = x
            head = (head + 1) % capacity
            n++
            return x
        },
        dequeue: () => {
            if(n ==0) {
                return null
            }
            const v = buf[tail]
            tail = (tail + 1) % capacity
            n--
            return v
        }
    }
}

//      1
//   2      3
// 4   5   -  6

const r = node(1, node(2, node(4,null,null),node(5,null,null)),node(3, null, node(6,null,null)))

traverse(r)