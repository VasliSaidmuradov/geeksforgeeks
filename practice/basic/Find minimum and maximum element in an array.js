// Find minimum and maximum element in an array 

// #1
class Solution{
  getMinMax(arr,n) {
    //code here
    let min = Infinity
    let max = 0

    for (let num of arr) {
      min = Math.min(min, num)
      max = Math.max(max, num)
    }

    return [min, max]
  }
}