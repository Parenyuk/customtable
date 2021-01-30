import React, {useEffect, useState} from 'react';
import classes from './CustomInput.module.css'
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/tableReducer';
import {CustomSelect} from '../../common/CustomSelect/CustomSelect';


export const CustomInput = ({headerName, type, options}) => {
    const [filterValue, setFilterValue] = useState('');

    const changeFilterValue = (e) => {
        setFilterValue(e.currentTarget.value)
    }

    const dispatch = useDispatch();

    // useEffect(() => {
    //         let headName = headerName.toLowerCase()
    //         dispatch(actions.SetFilterValue(filterValue, headName))
    // }, [filterValue]) // if need to realize filter data dynamically

    const onFilterByEnterButton = (e) => {
        if (e.charCode === 13) {
            let headName = headerName.toLowerCase()
            dispatch(actions.SetFilterValue(filterValue, headName))
        }
    }

    let arrayStatusOptions = Array.from(options, ({status})=> status);

    let arrayTypeOptions = Array.from(options, ({type})=> type);

    let uniqueStatusOptions = Array.from(new Set(arrayStatusOptions));

    let uniqueTypeOptions = Array.from(new Set(arrayTypeOptions));

    if(type === 'selector' && headerName == 'Status' ) return <CustomSelect type={type} renderOptions={uniqueStatusOptions} />
    else if (type === 'selector' && headerName == 'Type') return <CustomSelect type={type} renderOptions={uniqueTypeOptions} />

    return (
        <div>
            <input placeholder={headerName} type={type} onChange={changeFilterValue} className={classes.input} value={filterValue} onKeyPress={onFilterByEnterButton} />
        </div>
    )

}
