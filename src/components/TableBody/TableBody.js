import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const TableBody = () => {

    let {tableItem, searchValue} = useSelector(state => state.tablePage);
    const [data, setData] = useState(tableItem)

    console.log(searchValue)

    useEffect(() => {

        let filteredData = tableItem.filter(item => {

           return searchValue.filterValue ? item[searchValue.headerName].toString().includes(searchValue.filterValue) : true
        }  )

        setData(filteredData)

    }, [searchValue])

    return data?.map((elem, index) => {
        return (
            <tr key={index}>
                {Object.values(elem)?.map((item, index) => {
                    return <td key={index}>{item}</td>
                }) }
            </tr>
        )

    })
}
