const Router = require('../../app/Router');
const controller = require('../../handlers/users/users-controller');
const router = new Router();

router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);
// router.put('/users', controller.updateUser);     // add method

module.exports = router;
