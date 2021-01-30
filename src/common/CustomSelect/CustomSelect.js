import React, {useEffect} from 'react';
import classes from './CustomSelect.module.css';
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/tableReducer';

export const CustomSelect = ({renderOptions, headerName}) => {

    const dispatch = useDispatch();

   const onSelectValue = (e) => {
       let filterValue = e.currentTarget.value
       let headName = headerName.toLowerCase()
       dispatch(actions.SetFilterValue(filterValue, headName))
   }

   return (
        <select name="1" id="" className={classes.select} onChange={onSelectValue} >
            {
                renderOptions.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                } )
            }
        </select>
    )
}
