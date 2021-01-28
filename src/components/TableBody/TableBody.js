import React from 'react';
import {useSelector} from 'react-redux';
import classes from './TableBody.module.css'


export const TableBody = () => {

    let tableI = useSelector(state => state.tablePage.tableItem);

    // let tableItem = useSelector(state => state.tablePage.number);
    //
    // let renderTableItem = tableItem.map((itemName, index) => {
    //     return <div className={classes.tableItem}>{itemName}</div>
    // })
    //
    //
    // let customerItem = useSelector(state => state.tablePage.customer);
    //
    // let renderCustomerItem = customerItem.map((itemName, index) => {
    //     return <div className={classes.tableItem}>{itemName}</div>
    // })


    // return tableItem.map((itemName, index) => {
    //     return (
    //         <div>
    //             <div className={classes.tableItem}>{itemName}</div>
    //             {/*<div>{customerItem}</div>*/}
    //         </div>
    //     )
    //
    // })

    //working variant!!!
    // return (
    //     <div>
    //         <div>{renderTableItem}</div>
    //         <div>{renderCustomerItem}</div>
    //     </div>
    // )

    //working variant
    // return tableItem.map((itemName, index) => {
    //     return (
    //         <tr key={index}>
    //             <td className={classes.tableItem}>{itemName}</td>
    //             <td>{customerItem}</td>
    //         </tr>
    //     )
    //
    // })

    return tableI?.map((elem, index) => {
        return (
            <tr key={index}>
                {Object.values(elem)?.map((item) => {
                    return <td>{item}</td>
                }) }
                {/*<td className={classes.tableItem}>{elem.}</td>*/}
                {/*<td>{customerItem}</td>*/}
            </tr>
        )

    })

}
