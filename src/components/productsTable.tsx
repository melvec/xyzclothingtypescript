import React, {useState} from 'react';
import data from "../products.json"
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'

export const ProductsTable = () => {
    const[products, setProducts] = useState(data);
    return <TableContainer component={Paper}>
<Table>
    <TableHead>
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
            products.map((product) => (
                <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                </TableRow>
            ))
        }
    </TableBody>
</Table>
    </TableContainer>
}

