import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/cart'>
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;