const dotenv = require('dotenv');
const Router = require('./src/app/Router');
const Server = require('./src/app/Server');

dotenv.config();

const PORT = process.env.PORT || 3000;
const router = new Router();
const server = new Server();

router.get('/users', (req, res) => {
    res.end('You send request to /users');
});

router.get('/posts', (req, res) => {
    res.end('You send request to /posts');
});

server.addRouter(router);
server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
