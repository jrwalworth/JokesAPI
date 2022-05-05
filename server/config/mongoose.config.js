const mongoose = require('mongoose');

const dbName = 'jokesDB';

mongoose.connect(`mongodb://localhost/${dbName}`, {
useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => {
    console.log('Connected to the DB successfully')
})
.catch((err) => {
    console.log('Something went wrong connected to DB', err)
});