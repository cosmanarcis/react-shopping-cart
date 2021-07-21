import React from 'react';
import { Link } from 'react-router-dom';

const AboutApp = () => {
    return ( 
        <>
        <h2 className="about__app">I am still a beginner at react , but I did my best building this app. Ignore the styles , focus on the functionality :)</h2>
        <Link to="/">
        <button className="empty__cart-button">Start shopping</button>
        </Link>
        </>
     );
}
 
export default AboutApp
