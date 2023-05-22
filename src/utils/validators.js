const User = require('../api/models/user.model');

const validatePassword = (pass) => {
    const regex = /^[A-Za-z0-9\s]+$/g;
    return regex.test(pass);
};

const validateEmail = (email) => {
    const regex =
        // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const usedEmail = async (email) => {
    const users = await User.find({ email: email });
    return users.length;
};

module.exports = { validatePassword, validateEmail, usedEmail };
