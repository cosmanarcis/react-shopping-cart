import React,{useContext,useState,useEffect}  from 'react';
import { DataContext } from './dataProvider';
import { Link } from 'react-router-dom';


const ItemSection = () => {
    const value = useContext(DataContext)
    const [products]=value.products
    const [brand,setBrand] = useState('All')
    const [input,setInput] = useState('')
    const [filteredBrands,setFilteredBrands]=useState([])

    useEffect(() => {
        const filteredProductBrands = () =>{
            if(brand === 'All'){
                setFilteredBrands(products)
            } else if(brand === 'Nike'){
                setFilteredBrands(products.filter(product=>product.category==='nike'))
            }else if(brand === 'Adidas'){
                setFilteredBrands(products.filter(product=>product.category==='adidas'))
            }
        }
        filteredProductBrands()
    }, [products,brand]);

    return ( 
        <div className="container">
            <div className="products__header">
                <input
                    onChange={(e)=>setInput(e.target.value)}
                    className="nav__input"
                    type="text"
                    placeholder="Search products:"
                    />
                <div className="products__filter-brand">
                    <h3>Filter brands:</h3>
                    <select 
                    className="select__brand" 
                    name="brands"
                    onChange={(e)=>setBrand(e.target.value)}
                    >   
                        <option value="All">All</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Nike">Nike</option>
                    </select>
                </div>
            </div>
            <div className="product__container">
        {filteredBrands.filter(item=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        }).map(product=>(
                <div className="product__wrapper" key={product.id} >
                    <div className="product__section">
                    <Link to={`/productinfo/${product.id}`}>
                    <img 
                    className="product__image"
                    src={product.image}
                    width="300"
                    alt="nothing" />
                    </Link>
                    <p className="product__name">{product.name}</p>
                    <p className="product__price">{product.price} €</p>
                    </div>
                    <Link to={`/productinfo/${product.id}`}>
                        <button 
                        className="product__button"
                        >View Product 
                        </button>
                    </Link>
                    </div>
        ))}
            </div>
        </div>
     );
}
 
export default ItemSection;