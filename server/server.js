const express = require('express');
require('./config/mongoose.config');
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({extended: true}));

const allJokeRoutes = require('./routes/joke.routes');
allJokeRoutes(app);


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));