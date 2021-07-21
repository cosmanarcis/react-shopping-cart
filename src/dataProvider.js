import React ,{createContext,useState,useEffect} from 'react';
import { items } from './constants/items';

export const DataContext =createContext()

export const DataProvider = (props) =>{
    const [products,setProducts] = useState(items)
    const [cart,setCart]=useState([])
    const [size,setSize]=useState(null)

    const saveSizeId=(size,id)=>{
        setSize(size)
    }

    const addItemToCart = (id) =>{
        const check = cart.every(item=>{
            return item.id !==id
        })
        if(!size){
            alert('Please select one size :)')
            return null}
        if(check){
            const data = products.filter(product=>{
                return product.id === id
            })
            data ? data[0].selectedSize = size : console.log(".")
            setCart([...cart,...data]) 
            setSize(null)
        }else{
            alert("The item has already been added in cart . We are changing now the size")
            const data = products.filter(product=>{
                return product.id === id
            })
            data ? data[0].selectedSize = size : console.log(".")
            setSize(null)
        }
    }

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('cart items'))
        if(savedItems) setCart(savedItems)
    }, []);
    
    useEffect(() => {
        localStorage.setItem('cart items' , JSON.stringify(cart))
    }, [cart]);



    const value={
        products :[products,setProducts],
        cart: [cart,setCart],
        size:[size,setSize],
        addItemToCart: addItemToCart,
        saveSizeId:saveSizeId,
    }

 return (
     <div>
         <DataContext.Provider value={value}>
             {props.children}
         </DataContext.Provider>
     </div>
 )
}