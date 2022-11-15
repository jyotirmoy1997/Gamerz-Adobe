import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';
import SignInPage from './route/sign-in-page/sign-in-page.component';
import Cart from './route/cart/cart.component';
import Shop from './route/shop/shop.component';
import CheckOut from './route/checkout/checkout.component';
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import {setCurrentUser} from './store/user/user-action'
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user)
        dispatch(setCurrentUser(user));
        
    })
    return unsubscribe;
}, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='/shop/*' element={<Shop/>}/> 
        {/*  Indicates match any route after shop */}
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
}

export default App;
