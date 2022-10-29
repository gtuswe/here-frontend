
function login(req,res) {
    res.send({ express: 'Hello From Express' });
}

function register(req,res) {
    res.send({ express: 'Hello From Express' });
}

function logout(req,res) {
    res.send({ express: 'Hello From Express' });
}

function getUser(req,res) {
    res.send({ express: 'Hello From Express' });
}

module.exports = {
    login,
    register,
    logout,
    getUser,
};