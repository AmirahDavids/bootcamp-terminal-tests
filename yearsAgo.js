module.exports = function yearsAgo(item) {
  var date = new Date()
  var z = date.getFullYear()
  return (z - item)
}