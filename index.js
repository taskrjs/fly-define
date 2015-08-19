module.exports = function () {
  this.filter("define", (source, options) => {
    try {
      return source
     } catch (e) { throw e }
  })
}
