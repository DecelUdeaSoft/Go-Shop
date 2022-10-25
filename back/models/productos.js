const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        tupe:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del pruducto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor registre una descripcion para el producto."]
    },
    calificacion:{
        type: Number,
        default: 0
    },
    Imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[ //categorias de relojes deportivos
            "Reloj Deportivo Hombre",
            "Reloj Deportivo Mujer",
            "Reloj Digital Deportivo Hombre",
            "Reloj Digital Deportivo Mujer"
            ]    
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor del producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede superar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema)