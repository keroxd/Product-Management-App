import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"]
    },
    image: {
        type: String,
        required: false,
        default: "https://i.pinimg.com/1200x/f9/ef/3a/f9ef3ab3c10acd4dde5b6499bf89840d.jpg", // Placeholder if no image provided
        set: v => v === "" ? undefined : v
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});

// Note: Mongoose automatically creates a unique '_id' for every document, 
// so you don't need to define 'id' manually.

const Product = mongoose.model('Product', productSchema);
export default Product;