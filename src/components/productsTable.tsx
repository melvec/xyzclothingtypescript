import React, { useState } from 'react';
import data from "../products.json"
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button
} from '@mui/material'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const ProductsTable = () => {
    const [products, setProducts] = useState(data);

    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return <TableContainer component={Paper} >
        <Table aria-label='simple table' >
            <TableHead>
            <TableRow>


<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
    <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label="Age"
    >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
    </Select>
</FormControl>


</TableRow>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Options</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    products.map((product) => (
                        <TableRow key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price.amount} {product.price.base}</TableCell>
                            <TableCell><Button variant="contained">Edit</Button></TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
}

