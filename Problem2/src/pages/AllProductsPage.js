import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { Container, TextField, Button, Grid } from '@mui/material';

const AllProductsPage = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            label="Category"
            name="category"
            onChange={handleFilterChange}
            fullWidth
          />
          <TextField
            label="Company"
            name="company"
            onChange={handleFilterChange}
            fullWidth
          />
          {/* Add more filters here */}
          <Button onClick={() => setPage(page + 1)}>Next Page</Button>
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductList filters={filters} sort={sort} page={page} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllProductsPage;
