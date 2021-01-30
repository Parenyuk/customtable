import React, {useEffect, useState} from 'react';
import classes from './CustomInput.module.css'
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/tableReducer';
import {CustomSelect} from '../../common/CustomSelect/CustomSelect';


export const CustomInput = ({headerName, type, arrayTableData}) => {
    const [filterValue, setFilterValue] = useState('');




    const changeFilterValue = (e) => {
        setFilterValue(e.currentTarget.value)
    }


    const dispatch = useDispatch();



    // useEffect(() => {
    //         let headName = headerName.toLowerCase()
    //         dispatch(actions.SetFilterValue(filterValue, headName))
    // }, [filterValue])

    const onFilterByEnterButton = (e) => {
        if (e.charCode === 13) {
            let headName = headerName.toLowerCase()
            dispatch(actions.SetFilterValue(filterValue, headName))
        }
    }

    if(type === 'selector') return <CustomSelect type={type} options={arrayTableData} />

    return (
        <div>
            <input placeholder={headerName} type={type} onChange={changeFilterValue} className={classes.input} value={filterValue} onKeyPress={onFilterByEnterButton} />
        </div>
    )

}
