const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize')

const index = require('./router/index')
const indexadmin = require('./router/indexAdmin')
const indexcust = require('./router/indexCustomer')
const path = require('path')

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname,'public')))

app.use('/',index)
app.use('/admin', indexadmin)
app.use('/customer', indexcust)

app.listen(3000,()=>{
    console.log(`Hello I'm on 3000`);
  })