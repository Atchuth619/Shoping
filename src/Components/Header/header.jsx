import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../Assets/crown.svg';

const Header = ()=>(
    <div className="header">
        <Logo  className='logo-container'/>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
        </div>

    </div>
)
export default Header;