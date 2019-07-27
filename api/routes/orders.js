const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders fetched'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order created'
    })
})

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === 66) {
        res.status(200).json({
            message: 'Execute order 66'
        })
    }else{
        res.status(200).json({
            message: 'Order ' + id + ' updated'
        })
    }
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted'
    })
})

module.exports = router;