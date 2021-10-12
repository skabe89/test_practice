exports.reverseString = (string) => {

  return reverse(string)

}

const reverse = (arg) => {
  return arg.split('').reverse().join('')
}
