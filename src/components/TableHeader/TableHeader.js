import React from 'react';
import {useSelector} from 'react-redux';
import {CustomInput} from '../CustomInput/CustomInput';
import './../CustomTable/CustomTable.css'
import {SortButton} from '../../common/SortButton/SortButton';

export const TableHeader = () => {

    let headerTitleElement = useSelector(state => state.tablePage.tableTitle);
    let arrayTableData = useSelector(state => state.tablePage.tableItem)


    return Object.values(headerTitleElement).map((elem, index) => {

            return <tr key={index}> {
                Object.values(elem).map((item, index) => {
                    return (
                        <th key={index}>
                            <div>
                                <div className={'titleBlock'}>
                                    <div className={'title'}>{item.title}</div>
                                    <div><SortButton titleForSort={item.title?.toLowerCase()}/></div>
                                </div>
                                <div><CustomInput headerName={item.title} type={item.type} arrayTableData={arrayTableData}/>
                                </div>
                            </div>
                        </th>
                    )
                })
            }
            </tr>
        }
    )

}
