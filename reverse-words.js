
const reverse = (arr,start, stop) => {
 if(!arr || arr.length == 0 || start >= stop) {
   return arr
 }
 
 for(let i=start,j=stop-1;i<=j;i++,j--) {
   let hold = arr[i]
   arr[i] = arr[j]
   arr[j] = hold
 }  
return arr
}

const reverseWords = (arr) => {
 let r = reverse(arr,0,arr.length)
 let start = 0
 let stop = 0
 for(let i=0;i<r.length-1;i++) {
  if(r[i] == ' ') {
    stop = i
    r = reverse(r,start,stop)
    i++
    start = i
    stop = i
  }
 }
 r = reverse(r,start,r.length)
 return r.reduce((acc,c)=>{
   acc += c
   return acc
 },"");
}


const [...rest] = "hello likes world"
console.log(reverseWords(rest))



