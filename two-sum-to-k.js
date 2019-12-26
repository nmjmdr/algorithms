//find two elements in a sorted array A summing to a specified K. 

const sumK = (k, m, n, arr) => {
    if(m === n) {
        return []
    }
    const trial = arr[m] + arr[n]
    if(trial === k) {
        return [arr[m], arr[n]]
    } else if(trial < k) {
        return sumK(k, m+1, n , arr)
    } else {
        return sumK(k, m, n-1, arr)
    }
}

const arr = [1,2,4,6,9,12,16,19,100]
