const User = require('../modals/user-modal');

const getUsers = async (req, res) => {
    let users;

    if (req.params.id) {
        users = await User.findById(req.params.id);
    } else {
        users = await User.find();
    }

    res.send(users);
};

const createUser = async (req, res) => {
    const user = await User.create(req.body);

    res.send(user);
};

// TODO: add method
// const updateUser = async (req, res) => {
//     const user = req.body;
//     const result =  users.filter(item => item.id !== user.id)

//     result.push(user);

//     res.send(result)
// };

module.exports = {
    getUsers,
    createUser,
    // updateUser,
};
