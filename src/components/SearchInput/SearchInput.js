import React from 'react';
import classes from './SearchInput.module.css'


export const SearchInput = ({headerName}) => {

    return (
        <div className={classes.input}>
            <input placeholder={headerName} />
        </div>
    )
}
