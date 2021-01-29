import React from 'react';
import {useSelector} from 'react-redux';
import classes from './TableBody.module.css'


export const TableBody = () => {


    let tableI = useSelector(state => state.tablePage.tableItem);

    debugger

    return tableI?.map((elem, index) => {
        debugger
        return (
            <tr key={index}>
                {Object.values(elem)?.map((item, index) => {
                    return <td key={index}>{item}</td>
                }) }
            </tr>
        )

    })

}
