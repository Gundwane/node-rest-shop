const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: 'Congrats! You discovered the special ID'
        })
    }else
    {
        res.status(200).json({
            message: 'Nothing speciall to tell you'
        })
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product updated'
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted'
    })
});

module.exports = router;