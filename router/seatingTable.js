const express = require('express');
const router  = express.Router();
const models = require('../models');

router.get('/',(req, res)=>{
    models.SeatingTable.findAll({
        order:[['id','ASC']]
    }).then(bla=>{
      res.render('waiter',{data:bla,err_msg:false})
    })
    .catch(err=>{
      throw err.toString()
    })
  })


//   ADD Officer
  router.post('/', (req, res)=>{
//   res.send(req.body)
    models.SeatingTable.create({
                        nama:`${req.body.nama}`,
                        jabatan:`${req.body.jabatan}`
                      })
    .then(()=>{
        res.redirect('/admin/waiter')
    })
    .catch(err=>{
        throw err.toString()
    })
})

// DELETE officer
router.get('/delete/:id', (req, res)=>{
    models.SeatingTable.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        res.redirect('/admin/waiter')
    })
    .catch(err=>{
        res.send(err)
    })
})

// EDIT officer
router.get('/edit/:id', (req, res)=> {
    models.SeatingTable.findAll({
        where : {
            id : req.params.id
        }
    })
    .then(rows =>{
        res.render('waiter-edit', {data:rows[0]})
    }) 
    .catch(err =>{
        res.send(err)
    })
})

router.post('/edit/:id', (req, res)=>{
    models.SeatingTable.update({
        nama:`${req.body.nama}`, 
        jabatan:`${req.body.jabatan}`
    },{
        where:{
            id : req.params.id
        }
    })
    .then((r)=>{
        res.redirect('/admin/waiter')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router;
