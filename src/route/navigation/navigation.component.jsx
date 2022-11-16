import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext} from 'react';
import { useSelector } from 'react-redux';
import './navigation.styles.css';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { setCurrentUser } from '../../store/user/user-action';


const Logo = require('../../assets/LOGO.png')


const Navigation = () => {
    // const {currentUser, setCurrentUser} = useContext(UserContext)

    // Replacing Context API with Redux
    const currentUser = useSelector((state) => {
        return state.user.currentUser
    })


    const {isCartOpen} = useContext(CartContext)
    // console.log(currentUser)
    const signOutHandler = async () => {
        const res = await signOutUser();
        setCurrentUser(null);
    }
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
            {
                (currentUser) ? 
                (<Link className="nav-link" to="/sign-in" onClick={signOutHandler}>
                    Sign Out
                </Link>) : 
                (<Link className="nav-link" to="/sign-in">
                    Sign In
                </Link>)
            }
            
            <Link className="nav-link">
                <CartIcon/>
            </Link>
        </div>
        {/* Short Circuit Operator always evaluates the latter expression. 
        As components always return true, based upon the first expression,
        the entire part is rendered. */}
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </Fragment>
    
    )
  }

export default Navigation;