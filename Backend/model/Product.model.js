import mongoose  from "mongoose";


const ProductSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Timestamp :{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;