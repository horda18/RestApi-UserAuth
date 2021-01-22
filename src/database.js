const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));