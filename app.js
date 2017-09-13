const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize')

const index = require('./router/index')
const indexadmin = require('./router/indexAdmin')
const indexcust = require('./router/indexCustomer')

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

app.use('/',index)
app.use('/admin', indexadmin)
app.use('/customer', indexadmin)

app.listen(3001,()=>{
    console.log(`Hello I'm on 3000`);
  })