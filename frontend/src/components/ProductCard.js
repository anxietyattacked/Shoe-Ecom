import React from 'react'
import "./styles/ProductCard.css"

const Card = ({product}) => {
    return (
                <div className="card">
                    <div className="image-div">
                        <img className="product-image" src={product.image} alt={product.name}/>
                    </div>
                    <div className="info-div">
                        <h2>{product.name}</h2>
                        <p><strong>{`$${product.price}`}</strong></p>
                        <p>{product.brand}</p>
                    </div>
                </div>
            
    )
}

export default Card
