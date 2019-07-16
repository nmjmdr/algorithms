const reorder = (arr, pivot) => {
  let larger = []
  let smaller = []
  let equals = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      smaller.push(arr[i])
    } else if (arr[i] > arr[pivot]) {
      larger.push(arr[i])
    } else {
      equals.push(arr[i])
    }
  }
  return {
    smaller: smaller,
    equals: equals,
    larger: larger
  }
}


const sort = (arr) => {

  if (arr.length <= 1) {
    return arr
  }
  const pivot = Math.floor(arr.length / 2)
  const result = reorder(arr, pivot)
  return [...sort(result.smaller), ...result.equals, ...sort(result.larger)]
}

console.log(sort([3, 1, 1, 1, 2]))
