const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@compras.rlfbs.mongodb.net/compras?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(cors());
app.use(express.json());

require('./src/routes/index.js')(app);
app.listen(process.env.PORT);