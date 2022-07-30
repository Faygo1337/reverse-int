module.exports = function reverse (n) {
   const num = n + ""
   return Math.abs(parseInt(num.split("").reverse().join("")))
}

