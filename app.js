const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize')

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index');
  });

app.listen(3000 || 3000,()=>{
    console.log(`Hello I'm on 3000`);
  })