const express = require('express');

const router = express.Router();

const products =  require('../utils/mocks/products')

router.get("/", (req, res) => {
    let  data = {
        message: products,
        layout:  'layout.njk',
        title: 'Products'
    }
    res.render("index.njk", data);
});

module.exports = router;