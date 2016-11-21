let memoryArr = require('../config/db')

module.exports = {
  index: (req, res) => {
    memoryArr.reverse
    memoryArr.sort((a, b) => {
      return parseInt(b.shown) - parseInt(a.shown)
    })
    let newArr = []
    for (var i = 0; i < memoryArr.length; i++) {
      newArr.push(memoryArr[i])
      if (i === 6) break
    }
    res.render('home/index', {title: 'Blog System index', articles: newArr})
  }
}
