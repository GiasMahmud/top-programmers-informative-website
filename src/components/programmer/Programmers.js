import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,} from '@fortawesome/free-solid-svg-icons'
import Css from './programmers.css'




const shopingCart = <FontAwesomeIcon className = "ic1" icon={faShoppingCart} />



const Programmers = (props) => {
    // console.log(props)
    const {name, age, currentPosition, role, salary, Image, } = props.programmer
    
    return (
        
            <div className = "bio-container">

              <div className="bio-image">
                 <img src={Image} alt="" />
              </div>


              <div className="bio-details">
                    <h3 className = "name">Name : {name}</h3>
                    <p className ="age">Age : {age}</p>
                    <p className = "currentPosition">Current Position : {currentPosition} </p>
                    <p className ="role">Role : {role}</p>
                    <p className = "salary">Salary : ${salary}</p>
                    <button 
                    onClick ={()=>props.handleBtn(props.programmer)} className = "btn">{shopingCart} Add To Cart</button>

                
                </div>
            </div>
        
    );
};

export default Programmers;