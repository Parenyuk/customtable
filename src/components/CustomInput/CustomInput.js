import React, {useState} from 'react';
import classes from './CustomInput.module.css'
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/tableReducer';


export const CustomInput = ({headerName, type}) => {
    const [filterValue, setFilterValue] = useState('')

    const changeFilterValue = (e) => {
        setFilterValue(e.currentTarget.value)
    }

    const dispatch = useDispatch();

    const dispatchFilterValue = () => {
        dispatch(actions.SetFilterValue(filterValue))
    }



    return (
        <div>
            <input placeholder={headerName} type={type} onChange={changeFilterValue} className={classes.input} value={filterValue} />
        </div>
    )
}
