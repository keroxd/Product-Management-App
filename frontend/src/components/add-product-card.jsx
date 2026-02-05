import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import TextInput from "./input.jsx";
import useCreateProduct from "../hooks/useCreateProduct.js";

const AddProductCard = ({ close, image }) => {
    const {createProduct, loading} = useCreateProduct()

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewProduct((prev) => ({
            ...prev, [name]: value,
        }))
    }

    const addNewProduct = async (e) => {
        e.preventDefault();
        await createProduct(newProduct)
    }


    return (
        <>
            <form onSubmit={addNewProduct} className="bg-white w-180 h-auto border border-neutral-300 rounded-xl">
                <div className="bg-transparent w-full h-10 pt-6 flex items-center justify-between">
                    <h1 className="text-lg font-semibold ml-5 w-auto">Add New Product</h1>
                    <button type="button"
                        onClick={close}
                        className="bg-transparent flex items-center justify-center w-15 h-10 cursor-pointer "><IoCloseSharp size={24} /></button>
                </div>

                <section className="w-auto flex mt-3 p-4">
                    <img
                        className="min-w-64 h-84 object-cover rounded-lg"
                        src={newProduct.image || "https://i.pinimg.com/1200x/dc/50/d8/dc50d8d419a5a130fdef52b02152cc62.jpg"}
                        alt="Product Preview"
                    />
                    <div className="w-full">
                        <div className="bg-transparent w-full h-auto px-5 mt-8">
                            <TextInput name={"name"} onChange={handleChange}
                                value={newProduct.name} title={"Product Name"} placeholder={"Enter Product Name"} type={"text"} />
                            <TextInput name={"price"} onChange={handleChange}
                                value={newProduct.price} title={"Price"} placeholder={"Enter Price"} type={"text"} />
                            <TextInput name={"image"} onChange={handleChange}
                                value={newProduct.image} title={"Image URL"} placeholder={"Enter Image URL"} type={"text"} />
                        </div>

                        <div className="bg-transparent flex items-center w-full h-20 px-5">
                            <button onClick={() => console.log(newProduct)}
                                type="submit" disabled={loading}
                                className="bg-purple-200 text-purple-700 font-semibold rounded-md w-full h-11 cursor-pointer hover:brightness-90 transition-all duration-200">
                                {loading ? "Adding..." : "Continue"}
                            </button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}




export default AddProductCard;


