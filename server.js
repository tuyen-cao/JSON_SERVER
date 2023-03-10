// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')


const app = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

// /!\ Bind the router db to the app
app.db = router.db
// You must apply the auth middleware before the router
app.use(auth)
server.use(router)
server.listen(4500, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server





