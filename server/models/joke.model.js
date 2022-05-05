const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Joke must have a title.'],
    },
    content: {
        type: String,
        required: [true, 'Joke must contain a joke.']
    },
    answer: {
        type: String,
        required: [true, 'Joke must have an answer.']
    },
    author: {
        type: String,
        required: [true, "Joke must have an author."],
    },
},
{
    timestamps: true,
},);


const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;