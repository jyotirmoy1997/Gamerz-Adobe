import {Routes, Route} from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';
import SignInPage from './route/sign-in-page/sign-in-page.component';
import Cart from './route/cart/cart.component';
import Shop from './route/shop/shop.component';
import Contact from './route/contact/contact.component';
import CheckOut from './route/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='/shop/*' element={<Shop/>}/> 
        {/*  Indicates match any route after shop */}
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
}

export default App;
