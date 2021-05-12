const express = require('express');
const router = express.Router();
const productsMocks = require('../../utils/mocks/products')

router.get('/', (req, res) => {

    const { query } = req.query;

    res.status(200).json({
        data: productsMocks,
        message: "Products listed"
    })
});
router.get('/:productId', (req, res) => {

    const { productId } = req.params;

    res.status(200).json({
        data: productsMocks[0],
        message: "Product retrieved"
    })
});
router.post('/', (req, res) => {
    const { productId } = req.params;
    res.status(201).json({
        data: productsMocks[0],
        message: "Product created"
    })
});
router.put('/:productId', (req, res) => {

    res.status(200).json({
        data: productsMocks[0],
        message: "Product updated"
    })
});
router.delete('/:productId', (req, res) => {
    res.status(200).json({
        data: productsMocks[0],
        message: "Product deleted"
    })
});

module.exports = router;