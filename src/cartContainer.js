import React, {useEffect,useState,useContext} from 'react';
import { DataContext } from './dataProvider';
import { Link } from 'react-router-dom';



const CartContainer = () => {

    const value = useContext(DataContext)
    const [cart,setCart]=value.cart
    const [total,setTotal]=useState(0)

    const increaseProducts= id =>{
        cart.forEach(item=>{
            if(item.id===id){
                item.count = item.count+1
            }
        })
        setCart([...cart])
    }
    const decreaseProducts= id =>{
        cart.forEach(item=>{
            if(item.id===id){
                item.count===1 ? item.count=1 : item.count -=1;
            }
        })
        setCart([...cart])
    }

    const removeItemFromCart = (productToRemove) =>{
        setCart(cart.filter(product=>product !== productToRemove))
    }

    useEffect(() => {
        const calculateTotalPrice = () =>{
            const result = cart.reduce((prev,item)=>{
                return prev+(item.price * item.count)
            },0)
            setTotal(result)
        }
        calculateTotalPrice()
    }, [cart]);

    return ( 
    <div>
        {cart.length>0 ?
        <>
        <Link to="/">
            <button className="button__cart">Go back to shop</button>
        </Link>
        <button 
        onClick={()=>setCart([])}
        className="button__cart"
        >Clear cart</button>
        {cart.map(item=>(
            <div key={item.id} className="cart__item-container">
                <div className="cart__item-wrapper">
                    <div className="cart__item-image">
                    <img
                    src={item.image}
                    width="400"
                    alt="nothing"
                    />
                    </div>
                    <div className="cart__item-info">
                    <h2 className="product__info-title">{item.name}</h2>
                    <p className="product__price">{item.price} €</p>
                    <h3>{item.description}</h3>
                    <p>Size selected: <span className="cart__size">{item.selectedSize}</span></p>
                    <div className="cart__item-add">
                        <p className="cart__item-more">Add more :</p>
                        <div className="add__section">
                        <button 
                        className="add__section-button"
                        onClick={()=>decreaseProducts(item.id)}>-</button>
                        <h3>{item.count}</h3>
                        <button 
                        className="add__section-button"
                        onClick={()=>increaseProducts(item.id)}>+</button>
                        </div>
                    </div>
                    <button 
                    onClick={()=>removeItemFromCart(item)}
                    className="cart__button-remove">Remove product from cart</button>
                    </div>
                </div>
            </div>
        ))}
            <div className="cart__total">
                <h2>The total price of your items is:<span className="total__price"> {total} €</span></h2>
            </div>
            </>
            :(<>
            <h3 className="empty__cart">Seems like you dont have any items added in cart. Go ahead and add some.</h3>
            <Link to="/">
                <button className="empty__cart-button">Go back to shop</button>
            </Link>
            </>)}
    </div> );
}
 
export default CartContainer;