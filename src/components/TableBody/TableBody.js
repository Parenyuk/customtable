import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const TableBody = () => {

    let {tableItem, searchValue, sortValue} = useSelector(state => state.tablePage);
    const [data, setData] = useState(tableItem)

    useEffect(() => {

        let sortedData = tableItem.slice().sort((a, b) => {
            if (sortValue.direction === false) {
                if (a[sortValue.titleForSort] < b[sortValue.titleForSort]) {
                    return -1;
                }
                if (a[sortValue.titleForSort] > b[sortValue.titleForSort]) {
                    return 1;
                }
                return 0;
            } else if (sortValue.direction === true) {
                if (a[sortValue.titleForSort] > b[sortValue.titleForSort]) {

                    return -1;
                }
                if (a[sortValue.titleForSort] < b[sortValue.titleForSort]) {
                    return 1;
                }
                return 0;
            }
        })
        let filteredData = sortedData.filter(item => {

            return searchValue.filterValue ? item[searchValue.headerName].toString().includes(searchValue.filterValue) : true
        })
        setData(filteredData)

    }, [searchValue, sortValue])

    return data?.map((elem, index) => {
        return (
            <tr key={index}>
                {Object.values(elem)?.map((item, index) => {
                    return <td key={index}>{item}</td>
                })}
            </tr>
        )

    })
}
