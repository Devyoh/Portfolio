import { TextField } from '@mui/material';
import React from 'react'
import theme from '../Button/themeButton'

export default function SearchBar(props) {
    return (
        <>
            <div className={theme === 'dark' ? "search bg-white" : "search"}>
                <TextField
                />
            </div>
        </>
    )
}
