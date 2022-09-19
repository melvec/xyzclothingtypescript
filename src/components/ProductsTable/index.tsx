import React, { useState, useCallback } from "react";
import data from "../../data/products.json";
// import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

import { Currency } from "../Currency";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";

interface Product {
  name: string;
  id: number;
  
}

export const ProductsTable = () => {
  const [products, setProducts] = useState(data);
  // const navigate = useNavigate();
  // const viewDetails = useCallback(() => navigate('/productdetails', {replace: true}), [navigate]);

  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow ><Currency /></TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                {product.price.amount} {product.price.base}
              </TableCell>
              <TableCell>
                <Button component={Link} to={`/productdetails/${product.id}`}  variant="contained">View More</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
