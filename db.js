const mongoose = require('mongoose');

const mongoURI = 'http://localhost:27017/inotebook';

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Database connected!');
    });
}

module.exports = connectToMongo;
