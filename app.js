const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const productRoutes = require('./api/routes/products.js');
const ordersRoutes = require('./api/routes/orders.js');

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;