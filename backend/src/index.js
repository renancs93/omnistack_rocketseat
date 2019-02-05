const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://omnistack:omnistack123@ds141043.mlab.com:41043/omnistack-backend',
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require("./routes"));

app.listen(3000, ()=>{
    console.log('Server stated on port 3000')
});