const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct, } = require("../controllers/productsController") //traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que  ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct);//establecemos la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct);//Creacion de la ruta de actualizaion
router.route('/producto/:id').delete(deleteProduct);//creacion de la eliminacion de un producto por Id

// fetch ayuda a tener acceso a ciertos recursos o informacion

module.exports=router;