const express = require('express'),
    router = express.Router(),
    User = require('./models/user');

module.exports = router;

// Get all users
router.get('/api/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(400).json(err)
        }
        res.json(users);
    });
});

// Get single user by ID
router.get('/api/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findOne({
        _id
    }, (err, user) => {
        if (err) {
            res.status(400).json(err)
        }
        res.json(user);
    });
});

// Get single user by email
router.get('/api/users/email/:email', (req, res) => {
    const email = req.params.email;

    User.findOne({
        email
    }, (err, user) => {
        if (err) {
            res.status(400).json(err)
        }
        let msg = user === null ? { message: 'Email is free'} : { message: 'Email is taken'};
        res.json(msg);
    });
});

// Create user
router.post('/api/users', (req, res) => {
    const user = new User(req.body);

    user.save((err, user) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(user);
    });
});

// Edit user
router.put('/api/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findByIdAndUpdate({
        _id
    }, req.body, {
        new: true
    }, (err, user) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(user);
    });
});

// Delete user
router.delete('/api/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findByIdAndRemove({
        _id
    }, (err, user) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(user);
    });
});