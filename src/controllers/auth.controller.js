import authService from '../services/auth.service.js';

export const getLogin = (req, res) => {
    res.render('login');
};

export const getProfile = (req, res) => {
    res.render('profile');
};

export const postLogin = async (req, res) => {
    try {
        // Implement login logic using authService
        res.redirect('/profile');
    } catch (error) {
        res.status(500).send('Login failed');
    }
};
