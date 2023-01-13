import React from 'react'
import './style/app.scss'
import './style/header.scss'
import './style/Home.scss'
import './style/Founder.scss'
import './style/Menu.scss'
import './style/Footer.scss'
import './style/contact.scss'
import './style/cart.scss'
import './style/shipping.scss'
import "./style/confirmOrder.scss";
import "./style/payment.scss";
import "./style/login.scss";
import "./style/profile.scss";
import "./style/myoder.scss";
import "./style/orderDetail.scss";
import "./style/dashboard.scss";
import "./style/about.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componets/Home/Home'
import Header from './componets/layout/Header'
import About from './componets/About'
import Contact from './componets/Contact'
import Eror from './componets/layout/Eror'
import Footer from './componets/layout/Footer'
import Cart from "./componets/cart/Cart";
import Shipping from "./componets/cart/Shipping";
import ConfirmOrder from "./componets/cart/ConfirmOrder";
import PaymentSuccess from './componets/cart/PaymentSuccess'
import Login from './componets/login/Login'
import Profile from './componets/profile/Profile'
import MyOrder from './componets/MyOrder/MyOrder'
import OrderDetail from './componets/MyOrder/OrderDetail'
import Dashboard from './componets/admin/Dashboard'
import User from './componets/admin/User'
import Orders from './componets/admin/Orders'
const App = () => {
  return (
    <BrowserRouter>
    <Header   isAuthenticated={true}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/confirmorder" element={<ConfirmOrder />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/me" element={<Profile />} />
      <Route path="/myorders" element={<MyOrder />} />
      <Route path="/order/:id" element={<OrderDetail/>} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users" element={<User />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="*" element={<Eror />} />


    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App