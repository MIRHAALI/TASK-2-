const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
});

// Create a new post form
router.get('/new', (req, res) => {
    res.render('new');
});

// Create a new post
router.post('/new', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    await post.save();
    res.redirect('/');
});

// Edit post form
router.get('/edit/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
});

// Update post
router.post('/edit/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content
    });
    res.redirect('/');
});

// Delete post
router.get('/delete/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;
