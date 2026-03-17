const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


//Todos los Productos
router.get('/', apiProductsController.index);

//Productos Vendidos
router.get('/vendidos', apiProductsController.vender);

//Detalle 
router.get('/:id', apiProductsController.detail);


module.exports = router