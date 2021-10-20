exports.largestSubArray = (arr) => {
  let subs = []
  if(arr.length > 1){
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(j > i){
          subs.push([...arr].slice(i, j).reduce((a, b) => a + b, 0))
        }
      }
    }
  }
  else if(arr[0] < 0){
    return 0
  }
  else{
    return arr[0]
  }
  
  return subs.sort((a, b) => b - a)[0]
}