const Joke = require('../models/joke.model');


const getAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => {
        res.json({jokes: allJokes})
    }).catch((err) => {
        res.json({message: 'Something went wrong finding jokes', err})
    });
};


const getSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then((oneJoke) => {
        res.json({joke: oneJoke})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong finding one joke', err})
    });
};

const createJoke = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => {
        res.json({joke: newJoke})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong creating joke', err})
    });
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then((updatedJoke) => {
            res.json({joke: updatedJoke})
        }).catch((err) => {
            res.json({message: 'Something went wrong updating joke', err})
        });
};

const deleteJoke = (req, res) => {
    Joke.remove({_id: req.params.id})
    .then((result) => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong deleting joke', err})
    });
};

module.exports = {
    getAllJokes,
    getSingleJoke,
    updateJoke,
    createJoke,
    deleteJoke
};