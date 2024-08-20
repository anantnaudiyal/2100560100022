import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card>
    <img src={product.imageUrl} alt={product.name} />
    <CardContent>
      <Typography variant="h6">{product.name}</Typography>
      <Typography>Company: {product.company}</Typography>
      <Typography>Price: ${product.price}</Typography>
      <Typography>Rating: {product.rating}</Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
