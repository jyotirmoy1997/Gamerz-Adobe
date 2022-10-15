import {Routes, Route} from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
