import {Outlet, Link} from 'react-router-dom';
import { Fragment} from 'react';
// import {ReactComponent as Logo} from '../../assets/logo.svg';
import './navigation.styles.css';
const CartLogo = require('../../assets/cart-icon.png')
const Logo = require('../../assets/LOGO.png')

const Navigation = () => {
    return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to="/">
            <img src={Logo} alt="" srcset="" height={100} width={262} />
        </Link>
        <div className='nav-links-container'>
            <Link className="nav-link" to="/shop">
                Shop
            </Link>
            <Link className="nav-link" to="/contact">
                Contact
            </Link>
            <Link className="nav-link" to="/sign-in">
                Sign In
            </Link>
            <Link className="nav-link" to="/cart">
                <img src={CartLogo} alt="" height={30} width={30} />
            </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
    
    )
  }

export default Navigation;