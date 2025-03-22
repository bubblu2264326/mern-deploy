import express from 'express'
import  functions  from '../controllers/products.js'
import auth from '../middlewares/xss.js'

const router=express.Router()

router.post('/',functions.create)


router.get('/',functions.readAll);
router.get('/name/:name',functions.read)
router.get('/id/:id',functions.readbyId)

router.delete('/:id',functions.deleteobj)





export default router
