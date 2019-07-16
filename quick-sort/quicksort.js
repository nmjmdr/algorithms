const reorder = (arr, pivot) => {
 larger = []
 smaller = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      smaller.push(arr[i])
    } else  if(arr[i]>arr[pivot]) {
      larger.push(arr[i])
    }
  }
  return {
    smaller: smaller,
    pivot: arr[pivot],
    larger: larger
    }
}


const sort = (arr) => {
 
  if(arr.length <= 1) {
    return arr
  }
  const pivot = Math.floor(arr.length/2)
  const result = reorder(arr, pivot)
  return [...sort(result.smaller),result.pivot,...sort(result.larger)]
}

console.log(sort([8, 5, 2, 9, 1, 10, 3, 4, 16, 12]))