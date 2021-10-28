exports.sort = (arr) => {
  return mergeSort(arr)
}

function mergeSort(arr){
  if(arr.length === 1)return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(arr1, arr2){
  let one = 0
  let two = 0
  let result = []
  while(one < arr1.length && two < arr2.length){
    if(arr1[one] < arr2[two]){
      result.push(arr1[one])
      one++
    }
    else{
      result.push(arr2[two])
      two++
    }
  }
  if(!arr1[one] && arr2[two]){
    result = [...result, ...arr2.slice(two)]
  }
  if(arr1[one] && !arr2[two]){
    result = [...result, ...arr1.slice(one)]
  }
  return result
}