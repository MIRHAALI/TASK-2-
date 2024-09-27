const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const postRoutes = require('./routes/posts');
app.use('/', postRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
