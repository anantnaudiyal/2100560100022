import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../services/api';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Container } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <Typography variant="h4">{product.name}</Typography>
      <Typography>Company: {product.company}</Typography>
      <Typography>Price: ${product.price}</Typography>
      <Typography>Rating: {product.rating}</Typography>
      <Typography>Discount: {product.discount}%</Typography>
      <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
    </Container>
  );
};

export default ProductDetail;
