import express from 'express';

const router = express.Router();

// Landing
router.get('/', (req, res) => {
    res.render('landing');
});

// Login
router.get('/login', (req, res) => {
    res.render('login');
});

// Profile
router.get('/profile', (req, res) => {
    res.render('profile');
});

export default router;
