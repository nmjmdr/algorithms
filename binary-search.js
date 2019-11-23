

const search = (key, arr) => {
    
    if(!arr || arr.length == 0) {
        return false
    }
    const mid = Math.floor(arr.length / 2)
    if(arr[mid] === key) {
        return true
    } else if(key < arr[mid]) {
        return search(key,arr.slice(0,mid))
    } else {
        return search(key, arr.slice(mid+1,arr.length))
    }
}
console.log(search(4,[1,3,4,7,8,9,10,20,21]))