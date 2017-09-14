const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('index', {pageTitle: 'Restaurant Magic'});
});

module.exports = router;