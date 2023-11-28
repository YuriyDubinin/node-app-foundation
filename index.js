const dotenv = require('dotenv');
const Router = require('./src/app/Router');
const Server = require('./src/app/Server');
const parseJson = require('./src/middlewares/parseJson');
const parseUrl = require('./src/middlewares/parseUrl');

const usersRouter = require('./src/handlers/users/users-router');

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = new Server();
const baseUrl = 'https://localhost:3000';

server.use(parseJson);
server.use(parseUrl(baseUrl));

server.addRouter(usersRouter);
server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
