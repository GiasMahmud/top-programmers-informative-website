import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons'
import css from './cart.css'


const element = <FontAwesomeIcon className = "ic1" icon={faHandsHelping} />




const Cart = (props) => {
    
    const {cart} = props
    
    let total = 0
    for(let programmer of cart){
        total = total + programmer.salary
        // let Cname = programmer.name
        
    }

    

    // console.log(props.cart)

    return (
        <div className = "cart">
            <h4>Cart Details</h4>
            <h4>Total Programmers : {props.cart.length}</h4>
            <h4>Total Cost : ${total}</h4>

            <h4>Your Project assistant : </h4>
            <ul>
                {
                    cart.map((programmer)=><li>{element}{programmer.name}</li>)
                }
            </ul>
            


        </div>
    );
};

export default Cart;