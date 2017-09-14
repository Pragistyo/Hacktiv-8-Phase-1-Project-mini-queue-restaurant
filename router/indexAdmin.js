const express = require('express');
const router = express.Router();
const models = require('../models');
const waiter = require('./waiter');
const seatTable = require('./seatingTable')

router.get('/', (req, res)=>{
  res.render('indexAdmin', {pageTitle: 'Hello Admin'});
});

router.use('/waiter', waiter)
router.use('/seatingTable', seatTable)


module.exports = router;