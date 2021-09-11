const express = require('express');
const connectToMongo = require('./db');

connectToMongo();
const app = express();
const PORT = 5000;

app.use(express.json())

// Available routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running up on port ${process.env.PORT || PORT}`);
});
