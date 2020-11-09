import React, {useState, useEffect} from 'react'
import axios from "axios"
import ProductCard from "../components/ProductCard"
import "./styles/HomeScreen.css"

const HomeScreen = () => {
const [products, setProducts] = useState([])

useEffect(() => {
    const fetchProducts = async () => {
        const {data} = await axios.get("/api/products")    

        setProducts(data)
    }
    fetchProducts()

}, [])
    return (
        <div className="container">
            {products.map((product) => (
                <ProductCard product={product}/>
            ))}
            
        </div>
    )
}

export default HomeScreen
