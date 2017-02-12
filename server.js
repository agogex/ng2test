require('dotenv').config();

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    uriUtil = require('mongodb-uri'),
    mongooseUri = uriUtil.formatMongoose(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`),
    routing = require('./routes'),
    app = express();

app.use(express.static(path.join(__dirname, 'client', 'src')));
app.use('/node_modules', express.static(path.join(__dirname, 'client', 'node_modules')));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(routing);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/src/index.html'));
});

app.listen(process.env.PORT || 3000, () => {

    mongoose.connect(mongooseUri, {}, err => {
        if (err) {
            console.log(err);
        }
    });
    console.log('server is running...');
});
