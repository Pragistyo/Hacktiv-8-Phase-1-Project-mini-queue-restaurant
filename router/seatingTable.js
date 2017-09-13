const express = require('express');
const router  = express.Router();
const models = require('../models');

router.get('/',(req, res)=>{
    models.SeatingTable.findAll({
        order:[['id','ASC']]
    }).then(bla=>{
      res.render('seatingTable',{data:bla,err_msg:false})
    })
    .catch(err=>{
      throw err.toString()
    })
  })


//   ADD Officer
  router.post('/', (req, res)=>{

    models.SeatingTable.create({
                        tableName:`${req.body.tableName}`,
                        capasity: req.body.capasity
                      })
    .then(()=>{
        res.redirect('/admin/seatingTable')
    })
    .catch(err=>{
        models.SeatingTable.findAll({
            order:[['id','ASC']]
        }).then(bla=>{
          res.render('seatingTable',{data:bla,err_msg:err.errors[0].message})
        })
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
        res.redirect('/admin/seatingTable')
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
        res.render('seatingTable-edit', {data:rows[0]})
    }) 
    .catch(err =>{
        res.send(err)
    })
})

router.post('/edit/:id', (req, res)=>{
    models.SeatingTable.update({
        tableName:`${req.body.tableName}`, 
        capasity:`${req.body.capasity}`
    },{
        where:{
            id : req.params.id
        }
    })
    .then((r)=>{
        res.redirect('/admin/seatingTable')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router;
