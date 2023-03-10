const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const auth = require('json-server-auth');


const rules = auth.rewriter({
  // Permission rules
  users: 222,
  messages: 640,
  // Other rules
  '/posts/:category': '/posts?category=:category',
})
server.db = router.db;
server.use(middlewares);
server.use(auth);
server.use(rules)
//server.use(router);

server.listen(3500, () => {
  console.log('JSON Server is running');
});
