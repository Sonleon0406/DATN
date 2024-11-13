import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductList from './components/ProductList';
import Banner from './components/Baner';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
// import UserProfilePage from './pages/UserProfilePage';

const App = () => {
    return (
        <Router>
            <Header />
           <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path='/products' element={<ProductList />} /> */}
                <Route path="/products" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} /> 
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
