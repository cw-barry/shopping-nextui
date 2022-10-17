import React, { useState, useEffect } from 'react';

import { ProductsUI } from './ProductsUI';
import Categories from './Categories';
import Search from './Search';

const Main = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // https://api.escuelajs.co/api/v1/products
    // https://dummyjson.com/products
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        // setData(data.products);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setProducts(data);
    setCategories(
      data.reduce(
        (acc, item) =>
          !acc.includes(item.category.name)
            ? [...acc, item.category.name]
            : acc,
        ['all']
      )
    );
  }, [data]);

  const handleFilter = (selected) => {
    if (selected === 'all') {
      setProducts(data);
    } else {
      setProducts(data.filter((item) => item.category.name === selected));
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem' }}>Clarusway Shopping</h1>
      <Categories {...{ categories, handleFilter }} />
      <Search {...{ data, setProducts }} />
      <ProductsUI {...{ products }} />
    </div>
  );
};

export default Main;
