import React,{useContext} from 'react';
import { useParams } from 'react-router';
import { DataContext } from './dataProvider';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
    const {id} = useParams()
    const value = useContext(DataContext)
    const [products] = value.products
    const addItemToCart=value.addItemToCart
    const [size]=value.size
    const saveSizeId=value.saveSizeId

    const details = products.filter(product=>product.id ===id)

    return ( 
        <>
        {details.map(item=>(
            <div key={item.id} className="product__info-container">
                <div className="product__info-wrapper">
                    <div className="product__info-image">
                        <img 
                        width="600"
                        src={item.image} 
                        alt="nothing" 
                        />
                    </div>
                    <div className="product__info-description">
                        <h1 className="product__info-title">{item.name}</h1>
                        <h3>{item.description}</h3>
                        <h3>Price : <span className="product__price">{item.price} €</span></h3>
                        <div className="product__info-size">
                            <h2 className="available__sizes">Sizes:</h2>
                                {item.sizes.map(num=>(
                                    <div key={num.id} className="container__sizes">
                                    <span
                                    onClick={()=>saveSizeId(num.size)}
                                    className="size"
                                    >{num.size}</span>
                                    </div>
                                    ))}
                        </div>
                        <p>Selected size: <span className="selected__size">{size}</span></p>
                        {size==null ?
                            <button 
                            onClick={()=>addItemToCart(item.id)}
                            className="product__info-button"
                            >Add product to cart</button>
                            :<Link to="/cart">
                            <button 
                            onClick={()=>addItemToCart(item.id)}
                            className="product__info-button"
                            >Add product to cart</button>
                            </Link>}
                    </div>
                </div>
            </div>
        ))}
        </>
     );
}
 
export default ProductInfo