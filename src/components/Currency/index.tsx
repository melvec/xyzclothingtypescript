import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Currency = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
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
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>AUD</MenuItem>
            <MenuItem value={30}>...</MenuItem>
        </Select>
    </FormControl>
    )
}

 
