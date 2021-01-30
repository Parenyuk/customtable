import React from 'react';
import {useDispatch} from 'react-redux';
import arrow from './../../assets/images/arrow.png';
import classes from './SortButton.module.css'
import {actions} from '../../redux/tableReducer';


export const SortButton = ({titleForSort}) => {


    let dispatch = useDispatch()

    let onSortButtonClick = (direction) => {
        // debugger
        dispatch(actions.SetSortParams(direction, titleForSort))
    }

    return (
        <div className={classes.arrowContainer}>
            <img className={classes.arrowUp} src={arrow} onClick={() => onSortButtonClick (true)}/>
            <img className={classes.arrowDown} src={arrow} onClick={() =>onSortButtonClick (false)}/>
        </div>
    )
}
