import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './dataProvider';

const Header = () => {

    const value = useContext(DataContext)
    const [cart]=value.cart


    return ( 
        <div className="nav__container">
            <div className="nav__wrapper">
            <Link className="nav__link" to="/"><h1 className="nav__title">Sneakerhead</h1></Link>
                <div className="nav__links">
                <Link className="nav__link" to="/"><span>Home</span></Link>
                <Link className="nav__link" to="/cart">
                    <span className="cart__length">Cart
                    <div className="cart__length-number">{cart.length}</div>
                    </span>
                </Link>
                <Link className="nav__link" to="/aboutapp"><span>About app</span></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Header;