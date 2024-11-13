import React from 'react';
import ProductList from '../components/ProductList';
import BannerItem from '../components/BannerItem';
import InfoCard from '../components/InfoCard';
import BlogItem from '../components/BlogItem';


const Home = () => {
   
    return (
        <div>
            <BannerItem />
            <ProductList />
            <InfoCard />
            <BlogItem />    
        </div>
    );
};

export default Home;
