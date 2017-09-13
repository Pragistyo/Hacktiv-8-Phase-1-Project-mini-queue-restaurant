const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize')
const index = require('./router/index.js')

app.set('view engine', 'ejs')

app.use('/',index)

app.listen(3000 || 3000,()=>{
    console.log(`Hello I'm on 3000`);
  })