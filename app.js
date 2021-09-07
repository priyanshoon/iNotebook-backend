const express = require('express');

const app = express();
const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running up on port ${process.env.PORT || PORT}`);
});
