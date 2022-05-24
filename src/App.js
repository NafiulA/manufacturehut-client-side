import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Signup from './Pages/Authentication/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Addproduct from './Pages/Dashboard/Addproduct';
import Addreview from './Pages/Dashboard/Addreview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Manageorders from './Pages/Dashboard/Manageorders';
import Manageproducts from './Pages/Dashboard/Manageproducts';
import Myorders from './Pages/Dashboard/Myorders';
import Myprofile from './Pages/Dashboard/Myprofile';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Order/Checkout';
import Order from './Pages/Order/Order';
import Portfolio from './Pages/Portfolio/Portfolio';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order/:id' element={<RequireAuth><Order></Order></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='checkout/:id' element={<Checkout></Checkout>}></Route>
          <Route path='addreview' element={<Addreview></Addreview>}></Route>
          <Route path='manageorders' element={<Manageorders></Manageorders>}></Route>
          <Route path='addproduct' element={<Addproduct></Addproduct>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageproducts' element={<Manageproducts></Manageproducts>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
