const Router = require('../../app/Router');

const router = new Router();

const users = [
    {id: 1, name: 'Yura'},
    {id: 2, name: 'Nastya'}
]

router.get('/users', (req, res) => {
    res.send(users);
});

router.post('/users', (req, res) => {
    res.send(users);
});

module.exports = router;