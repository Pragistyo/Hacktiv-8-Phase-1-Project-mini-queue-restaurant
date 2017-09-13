const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize')

const index = require('./router/index')
const indexadmin = require('./router/indexAdmin')

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

app.use('/',index)
app.use('/admin', indexadmin)

app.listen(3000,()=>{
    console.log(`Hello I'm on 3000`);
  })