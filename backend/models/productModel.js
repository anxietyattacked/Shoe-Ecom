import mongoose from "mongoose"

const {Schema} = mongoose

const productSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type:String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true, 
        default: 0,   
        required:true
    },
    size: {
        type: Array,
        required: true, 
        default: 0,
    },
    rating: {
        type: Number,
        required: true, 
        default: 0,
    }
 

},
{
    timestamps: true,
  })

  const Product = mongoose.model('Product', productSchema)

  export default Product