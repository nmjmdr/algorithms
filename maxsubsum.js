
// does not work with all negative numbers
const brute = (arr) => {
    if(!arr || arr.length == 0) {
        return null
    }
    let maxglobal = Number.MIN_SAFE_INTEGER;
    for(let index=0;index<arr.length;index++) {
    let maxcurrent = arr[index]
    for(let i=index+1;i<arr.length;i++) {
        maxcurrent = arr[i] + maxcurrent;
        if(maxcurrent > maxglobal) {
            maxglobal = maxcurrent;
        }
        }
    }
    return maxglobal
}

const kadane = (arr) => {
    if(!arr || arr.length == 0) {
        return null
    }
    let maxglobal = 0
    let maxcurrent = 0

    for(let i=0;i<arr.length;i++) {
        maxcurrent = Math.max(arr[i]+maxcurrent, 0)
        if(maxglobal < maxcurrent) {
            maxglobal = maxcurrent
        }
    }
    return maxglobal
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(brute(arr))

console.log(kadane(arr))