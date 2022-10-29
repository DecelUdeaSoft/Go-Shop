const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));//esto es una usurpacion del require


//Ver la lista de productos
exports.getProducts=async(req,res,next) =>{
    const productos=await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }
    res.status(200).json({
        success:true,
        cantidad:productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById=async(req, res, next)=>{
    const product= await producto.findById(req.params.id)
    if(!product){
            return res.status(404).json({
            success:false,
            message: "No encontramos ese producto",
            error:true
        })
    }
    res.status(200).json({
        success:true,
        mensaje: "Aqui debajo encuentras informacion sobre tu produco",
        product
    })

}

//update un producto
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id)//variable de tipo modificable,
    if (!product){  //verificao que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }
    //Si el objeto si existía, entonces si ejecuto la actualización,
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //valido solo los atributos nuevos o actualizado
        runValidators:true    
    });
    //Respondo ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })        
}


//Eliminar un producto
exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id)//variable de tipo modificable,
    if (!product){  //verificao que el objeto no existe para finalizar el proceso
            return res.status(404).json({//si el objeto no existe, return termina el metodo
            success:false,
            message: "No encontramos ese producto"
        })
    }
    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto Eliminado Correctamente"
    })

}

    //Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);
   
    res.status(201).json({
        success:true,
        product
    })
}

//hablemos de fetch
//ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); Llamamos al metodo creado para probar la consulta

//ver por id
function verProductosPorId(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductosPorId('635819810c0fd6a4b6451750');


