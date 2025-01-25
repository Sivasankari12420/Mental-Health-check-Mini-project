const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/', {
    // console.log('connected')
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}

);

module.exports = mongoose.connection;
