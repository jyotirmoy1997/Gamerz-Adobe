import {Routes, Route} from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';
import SignIn from './route/sign-in/sign-in.component';
import Cart from './route/cart/cart.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
