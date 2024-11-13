// src/pages/CreateProductPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const CreateProductPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://api.yoursite.com/products', { name, price })
      .then(response => {
        alert('Sản phẩm đã được thêm!');
      })
      .catch(error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
      });
  };

  return (
    <Layout>
      <h1>Thêm sản phẩm mới</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Giá sản phẩm" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </Layout>
  );
};

export default CreateProductPage;
