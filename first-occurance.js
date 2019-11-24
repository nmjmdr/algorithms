

const first = (key, arr) => {
    return _first(key, arr, 0, arr.length -1)
}

const walkback = (key, arr, start, stop) => {
    let index = -1
    for(let i=stop;arr[i] === key && i>=start;i--){
        index = i
    }
    return index;
}

const _first = (key, arr, start, stop) => {
    if(start > stop) {
        return -1
    }
    const mid = Math.floor(((stop - start) / 2 + start))
    if(arr[mid] === key) {
        const index = walkback(key, arr, start, mid)
        return index === -1 ? mid : index
    } else if(key < arr[mid]) {
        return _first(key, arr, start, mid)
    } else {
        return _first(key, arr, mid, stop)
    }
}

console.log(first(17,[1,4,5,7,9,10,14,17,17,17,18,21,25]))