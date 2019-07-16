package main

import (
	"fmt"
	"math"
)

func combine(left []int,p int,right []int) []int {
 left = append(left,p)
 return append(left,right...)
}

func sort(arr []int) []int {
	pivot := int(math.Floor(float64(len(arr) / 2)))
	if len(arr) <= 1 {
	  return arr
	}
	arr = reorder(arr, pivot)
	left := arr[0:pivot]
	right := []int{}
	if pivot+1 < len(arr) {
		right = arr[pivot+1:]
	}
	return combine(sort(left),arr[pivot],sort(right))
}

func reorder(arr []int, pivot int) []int {
	swaps := 0
	for i := 0; i < pivot; i++ {
		if arr[i] > arr[pivot] {
			x := arr[i]
			arr[i] = arr[pivot]
			arr[pivot] = x
			swaps++
		}
	}
	for j := pivot + 1; j < len(arr); j++ {
		if arr[j] < arr[pivot] {
			x := arr[j]
			arr[j] = arr[pivot]
			arr[pivot] = x
			swaps++
		}
	}
	if swaps > 0 {
		arr = reorder(arr, pivot)
	}
	return arr
}

func main() {
	fmt.Println(sort([]int{9, 4, 1, 3, 8, 14, 12, 15, 10, 2}))
}
