import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from './ProductCard';
import { Grid, CircularProgress } from '@mui/material';

const ProductList = ({ filters, sort, page }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(filters, sort, page).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [filters, sort, page]);

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
