
import axios from "axios";
import { useState } from "react"


const useCreateProduct = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null)

    const createProduct = async (productData) => {
        if(!productData.name || !productData.price || !productData.image){
            alert("Please fill in all fields!")
            return false;
        }
        setLoading(true)
        setError(null)

        try{
            await axios.post("http://localhost:5000/api/products", productData)
            window.location.reload()
            return true;
        } catch (err) {
            console.log(err)
            setError(err.message || "Error during creating product")
            return false;
        } finally {
            setLoading(false)
        }
        
    }
    return {createProduct, loading, error   }
}
export default useCreateProduct;