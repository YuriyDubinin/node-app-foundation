const dotenv = require('dotenv');
const Router = require('./src/app/Router');
const Server = require('./src/app/Server');
const jsonParser = require('./src/middlewares/parseJson');

const usersRouter = require('./src/handlers/users/users-router');

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = new Server();

server.use(jsonParser);
server.addRouter(usersRouter);
server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
