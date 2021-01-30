import React from 'react';
import classes from './CustomSelect.module.css';
import {useSelector} from 'react-redux';


export const CustomSelect = ({options}) => {

    let arrayOptions = Array.from(options, ({status})=> status)

    let uniqueOptions = Array.from(new Set(arrayOptions));


    return (
        <select name="1" id="" className={classes.select}>
            {uniqueOptions.map((option, index) => {
                return <option key={index} value={option}>{option}</option>
            } )}
            {/*<option value="">1</option>*/}
            {/*<option value="">2</option>*/}
            {/*<option value="">3</option>*/}

        </select>
    )
}
