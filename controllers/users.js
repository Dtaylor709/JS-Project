import { createUser } from '../models/users.js';

export const createUserFormController = function (req, res) {
    return res.render('createAccount', { user:null});
}

export const createUserController = async function (req, res) {
    let userData = req.body;
    const user = await createUser(userData);
    return res.render('login', { user:null});
};

export const loginFormController = function (req, res) { 
    return res.render('login', { user:null}); 
};