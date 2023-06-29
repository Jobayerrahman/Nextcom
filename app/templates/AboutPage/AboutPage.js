import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export default function AboutPage(){
    const [value, setValue] = React.useState(2);
    return(
        <>
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
        </>
    )
}