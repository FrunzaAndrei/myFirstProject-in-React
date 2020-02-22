import React from 'react';

const Menu = (props) => {
    return <ul className={props.clasaMeniu}>
        <li className="menu-item">
                Home
        </li>
        <li className="menu-item">
                About
        </li>
        <li className="menu-item">
                Contact
        </li>
    </ul>
}

export default Menu;