import React from 'react';
import css from './header.css'

const Header = () => {
    return (
        <div className = "header">
        <h1>Top Programmers In Bangladesh</h1>
        <h3>There Are <span className = "sp1">Top Programmers</span> In Bangladesh.</h3>
        <h1>Total Budget : $50000000</h1>
    </div>
    );
};

export default Header;