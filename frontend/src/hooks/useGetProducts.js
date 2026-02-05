import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const useGetProducts = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:5000/api/products")
            setData(res.data.data)
            console.log(res.data.data)
        } catch (err) {
            setError(err.message || "Error during getting all products")
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        getProducts();
    }, [])
    return { data, loading, error, refetch: getProducts }
}
export default useGetProducts