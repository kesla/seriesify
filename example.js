var s = require('./seriesify')()

s.add(function (cb) {
  setTimeout(function () {
    cb(null, 1)
  }, 200)
})

s.add(function (cb) {
  setTimeout(function () {
    cb(null, 2)
  }, 100)
})

s.exec(function (err, results) {
  console.log(results)
})
