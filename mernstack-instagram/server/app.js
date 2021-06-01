const express = require("express");
const cors = require("cors")
const mongoose  = require("mongoose");
const ConnectDB = require ("./helpers/ConnectDB")
const app =  express();
app.use(cors())


ConnectDB();

require('./models/user')
require('./models/post')
app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
require('./models/post')

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log('sever is running on PORT: ${PORT}'));
