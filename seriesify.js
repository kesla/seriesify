var series = require('run-series')

module.exports = function () {
  var tasks = []

  return {
      add: function (fun) {
        tasks.push(fun)
        return this
      }
    , exec: function (callback) {
        series(tasks, callback)
      }
  }
}