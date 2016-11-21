let controller = require('../controllers')


module.exports = (app) => {
  app.get('/', controller.home.index)
  app.get('/create', controller.article.showArticleForm)
  app.post('/create', controller.article.createArticle)
  app.get('/all', controller.article.allArticles)
  app.get('/details/:id', controller.article.articleId)
  app.get('/change/:id', controller.article.changeButton)
}
