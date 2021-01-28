import React from 'react';
import {useSelector} from 'react-redux';
import {SearchInput} from '../SearchInput/SearchInput';
import './../CustomTable/CustomTable.css'

// export const TableHeader = () => {
//
//     let headerTitleElement = useSelector(state => state.tablePage.tableTitle)
//
//     return headerTitleElement.map((headerName, index) => {
//         return (
//                 <th className={classes.tableHeader}>
//                     <div>{headerName}</div>
//                     <div><SearchInput headerName={headerName} /></div>
//                 </th>
//         )
//
//     })
// }

export const TableHeader = () => {

    let headerTitleElement = useSelector(state => state.tablePage.tableTitle)

    return headerTitleElement.map((elem, index) => <tr>{
        Object.values(elem).map((item, index) => {
            return (
                <th key={index}>
                    <div className={'thContainer'}>
                        <div>{item}</div>
                        <div><SearchInput headerName={item} /*type={}*/ /></div>
                    </div>
                </th>
            )
        })
    }</tr>)
}
