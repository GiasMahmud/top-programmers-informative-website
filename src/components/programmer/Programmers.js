import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
// import { faShoppingCart,} from '@fortawesome/free-solid-svg-icons'
import Css from './programmers.css'



// const element = <FontAwesomeIcon className = "ic1" icon={faShoppingCart} />



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
                    onClick ={()=>props.handleBtn(props.programmer)} className = "btn">Add To Cart</button>

                   {/* <div className="social-icons">
                        <a href=""><FaGithub/></a>
                        <a href=""><FaFacebook/></a>
                        <a href=""><FaLinkedin/></a>
                        <a href=""><FaTwitter/></a>
                   </div> */}
                </div>
            </div>
        
    );
};

export default Programmers;