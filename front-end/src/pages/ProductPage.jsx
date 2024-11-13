import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed
import './ProductPage.css';
import '../components/Header.css'; // Đường dẫn đến file CSS


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Fetch products and categories on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products'); // Update with your API endpoint
        setProducts(response.data);

        // Extract unique categories from the products
        const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run once on mount

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }

  return (
    <div className="product-page">
      <div className="sidebar">
        <h3>Danh mục sản phẩm</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-content">
        <h2>{selectedCategory === 'All' ? 'Tất cả sản phẩm' : selectedCategory}</h2>
        <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.imgSrc} alt={product.name} />
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-weight">{product.weight}</div>
                                <div className="product-price">{product.price} VNĐ</div>
                                <a href="#" className="buy-now-btn">MUA NGAY</a>
                            </div>
                        </div>
                    ))}
                </div>
      </div>
    </div>
  );
};

export default ProductPage;
