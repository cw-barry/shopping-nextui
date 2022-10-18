import React, { useState, useEffect } from 'react';
import { Grid } from '@nextui-org/react';

import { ProductsUI } from './ProductsUI';
import Categories from './Categories';
import Search from './Search';

const Main = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState({});

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
    setPrice({ min: '', max: '' });
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
      <Grid.Container gap={2} justify="center">
        <Grid xs={2} direction="column" justify="flex-start">
          <Search {...{ data, setProducts, price, setPrice }} />
        </Grid>
        <Grid xs={10}>
          <ProductsUI {...{ products }} />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Main;
