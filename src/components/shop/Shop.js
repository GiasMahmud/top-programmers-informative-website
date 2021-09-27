import React, { useEffect, useState } from 'react';
import Cart from '../../cart/Cart';
import Programmers from '../programmer/Programmers.js';
import css from './shop.css'

const Shop = () => {
    const [programmers, setProgrammers] = useState([])
    const[cart, setCart] = useState([])

    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setProgrammers(data))
    },[])



    // // button section // //
    const handleBtn = (programmer) =>{
        const newCart = [...cart, programmer]
        setCart(newCart)
    }
    
    
    return (
        <div className = "shop-container">
            
            <div className="programmer-container">
                {
                    programmers.map(programmer=> <Programmers 
                        handleBtn = {handleBtn}
                        key ={programmer.key}
                        programmer = {programmer}></Programmers>)
                }
            </div>


            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;