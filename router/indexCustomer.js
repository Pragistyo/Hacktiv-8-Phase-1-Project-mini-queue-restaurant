const express = require('express');
const router = express.Router();
const models = require('../models');

// Melihat daftar meja dan pelayan yang ada
router.get('/', (req, res)=>{
    models.SeatingTable.findAll()
    .then(tables=>{
        models.Waiter.findAll()
        .then(pelayan=>{
            res.render('indexCustomer', {data: tables, dataWaiter: pelayan,err_msg:false});
        })
    })
    .catch(err=>{
        throw err
    })   
});

// Melihat waiter yang bertugas

router.get('/waiter',(req,res)=>{
    models.SeatingTableWaiter.findAll({
        include:[{all: true}],
        where:{
            WaiterId : req.query.WaiterId
        }
    })
    .then(eachWaiter=>{
        // res.send(eachWaiter)
        console.log(eachWaiter)
        res.render('customerWaiter',{data:eachWaiter})
    })
    .catch(err=>{
        // res.send(`waiter doesn't has order(s) yet`)
        res.send(err)
    })
})

// Memesan makanan dan mendapat nomor antrian
router.get('/orders/:id',(req, res)=>{
    models.FoodList.findAll()
    .then(food=>{
        models.Waiter.findAll()
            .then(pelayan=>{
                models.SeatingTable.findById(req.params.id)
                .then(meja=>{
                    res.render('orders',{err_msg:false,data:food,dataWaiter:pelayan,dataMeja:meja})
            })
        })
    })
    .catch(err=>{
        throw err
    }) 
})

router.post('/orders/:id',(req, res)=>{
    // console.log('------'+req.body.FoodListId)
    let trueCheck = false
    if(!req.body.FoodListId){
        trueCheck = true
        models.FoodList.findAll()
        .then(food=>{
            models.Waiter.findAll()
                .then(pelayan=>{
                    models.SeatingTable.findById(req.params.id).then(meja=>{
    
                    res.render('orders',{err_msg:true,data:food,dataWaiter:pelayan,dataMeja:meja})
                })
            })
        })
    }
    let antrian = 0;
    models.SeatingTableWaiter.findAll()
    .then(row=>{
        if(!row[row.length-1]){
            antrian = 1
        } else {
            let tanggalLama = row[row.length-1].tanggal.slice(8)
            let tanggalBaru = req.body.Tanggal.slice(8)
            let tglLama     = parseInt(tanggalLama)
            let tglBaru     = parseInt(tanggalBaru)

            if(tglBaru > tglLama){
                antrian = 1
            } else if(tglBaru == tglLama) {
                antrian = row[row.length-1].noAntrian + 1
            }
        }
        // console.log(antrian)
        if(!trueCheck){
        models.SeatingTableWaiter.create({
            SeatingTableId:req.body.SeatingTableId,
            WaiterId: req.body.WaiterId,
            tanggal: req.body.Tanggal,
            status: req.body.Status,
            noAntrian: antrian,
            FoodListId:req.body.FoodListId
        })
        .then(bener=>{
            res.redirect('/customer')
        })
    }
    }) 
})

// Mengecek pesanan yang sudah selesai atau belum
router.get('/waiter/done/:id',(req,res)=>{
    models.SeatingTableWaiter.findById(req.params.id)
    .then(obj=>{
        models.SeatingTableWaiter.update(
                                {status: 1},
                                {where:{id:req.params.id}})
                .then(()=>{
                    res.redirect(`/customer/waiter?WaiterId=${obj.WaiterId}`)
                    // res.send(obj.WaiterId)
                })
    })
        
})

router.get('/waiter/onProgress/:id',(req,res)=>{
    models.SeatingTableWaiter.findById(req.params.id)
    .then(obj=>{
        models.SeatingTableWaiter.update(
                        {status: 0},
                        {where:{id:req.params.id}})
        .then(()=>{
            res.redirect(`/customer/waiter?WaiterId=${obj.WaiterId}`)
            // res.redirect('/customer')
        })
    })
})

// melihat pesanan

router.get('/vieworder/:id', (req, res)=>{
    // res.send('lalalalala')
    models.SeatingTableWaiter.findAll({include: [{all : true}],
    where:{
        SeatingTableId: req.params.id
    }})
    .then(row=>{
        let countBeneran =0
        let count = 0;
        row.forEach(z=>{
          let antrian;
          if(z.status == 0){
            count++
            if(req.params.id == z.SeatingTableId){
                antrian = count
                // row.dataValues['YourQueue'] = antrian;
            }
          }
          
          z.dataValues['YourQueue'] = `${antrian}`;
          countBeneran++
        //   console.log(antrian)
          if(countBeneran === row.length){
            z.dataValues['TotalQueue'] = `${count}`;
            console.log('-------------',z)
            // res.send(row)
            res.render('customerSeatingTable', {data:row})
          }
        })
    })
})

module.exports = router;