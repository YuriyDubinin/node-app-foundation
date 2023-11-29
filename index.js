const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Router = require('./src/app/Router');
const Server = require('./src/app/Server');
const parseJson = require('./src/middlewares/parseJson');
const parseUrl = require('./src/middlewares/parseUrl');
const parseBody = require('./src/middlewares/parseBody');
const usersRouter = require('./src/routers/users-router');

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = new Server();
const baseUrl = 'https://localhost:3000';

server.use(parseJson);
server.use(parseBody);
server.use(parseUrl(baseUrl));

server.addRouter(usersRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
