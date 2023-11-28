const Router = require('../../app/Router');
const controller = require('../../handlers/users/users-controller');
const router = new Router();

const users = [
    {id: 1, name: 'Yura'},
    {id: 2, name: 'Nastya'},
];

router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);

module.exports = router;
