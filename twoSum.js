exports.twoSum = (arr, target) => {
  let set = new Set()
  for(let i = 0; i < arr.length; i++){
    let needed = target - arr[i]
    if(set.has(needed)){
      return true
    }
    else{
      set.add(arr[i])
    }
  }
  return false
}