const express = require('express');
const router = express.Router();
const models = require('../models');
const waiter = require('./waiter');
const seatTable = require('./seatingTable')

// router.use('/waiter', waiter)

router.get('/', (req, res)=>{
  res.render('indexAdmin');
});

router.use('/waiter', waiter)
router.use('/seatingTable', seatTable)
// router.get('/waiter',(req, res)=>{
//     models.Waiter.findAll({
//         order:[['id','ASC']]
//     }).then(bla=>{
//       res.render('waiter',{data:bla,err_msg:false})
//     })
//     .catch(err=>{
//       throw err.toString()
//     })
//   })


// //   ADD Officer
//   router.post('/waiter', (req, res)=>{
// //   res.send(req.body)
//     models.Waiter.create({
//                         nama:`${req.body.nama}`,
//                         jabatan:`${req.body.jabatan}`
//                       })
//     .then(()=>{
//         res.redirect('/admin/waiter')
//     })
//     .catch(err=>{
//         throw err.toString()
//     })
// })

// // DELETE officer
// router.get('/waiter/delete/:id', (req, res)=>{
//     models.Waiter.destroy({
//         where:{
//             id: req.params.id
//         }
//     })
//     .then(()=>{
//         res.redirect('/admin/waiter')
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })

// // EDIT officer
// router.get('/waiter/edit/:id', (req, res)=> {
//     models.Waiter.findAll({
//         where : {
//             id : req.params.id
//         }
//     })
//     .then(rows =>{
//         res.render('waiter-edit', {data:rows[0]})
//     }) 
//     .catch(err =>{
//         res.send(err)
//     })
// })

// router.post('/waiter/edit/:id', (req, res)=>{
//     models.Waiter.update({
//         nama:`${req.body.nama}`, 
//         jabatan:`${req.body.jabatan}`
//     },{
//         where:{
//             id : req.params.id
//         }
//     })
//     .then((r)=>{
//         res.redirect('/admin/waiter')
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })

module.exports = router;