const SET_SORT_PARAMS = 'custom_table/tableReducer/SET_SORT_PARAMS';
const SET_FILTER_VALUE = 'custom_table/tableReducer/SET_FILTER_VALUE'

const today = new Date().toDateString();

const initialState = {
    tableTitle: [
        {
            number: {type: 'number', title: 'Number'},
            customer: {type: 'text', title: 'Customer'},
            status: {type: 'text', title: 'Status'},
            actual: {type: 'number', title: 'Actual'},
            total: {type: 'number', title: 'Total'},
            type: {type: 'input', title: 'Type'},
            createData: {type: 'date', title: 'Createdate'},
            closeData: {type: 'date', title: 'Closedate'},
            country: {type: 'text', title: 'Country'}
        }
    ],
    tableItem: [
        {
            number: 23, customer: 'Admin', status: 'Processing', actual: 1000, total: 10, type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'
        },
        {
            number: 16, customer: 'User', status: 'Processing', actual: 1000, total: 10, type: 'Product',
            createData: today, closeData: today, country: 'Belarus'
        },
        {
            number: 23, customer: 'Admin', status: 'Processing', actual: 1000, total: 10, type: 'Product',
            createData: today, closeData: today, country: 'Poland'
        },
        {
            number: 35, customer: 'User', status: 'AAA', actual: 1000, total: 10, type: 'Product',
            createData: today, closeData: today, country: 'Spain'
        },
        {
            number: 34, customer: 'Admin', status: 'BBB', actual: 1000, total: 10, type: 'Product',
            createData: today, closeData: today, country: 'Germany'
        },
        {
            number: 44, customer: 'Admin', status: 'Processing', actual: 1000, total: 10, type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'
        }
    ],

}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_SORT_PARAMS:
        //     return {...state, repositoriesDataArray: action.repositoriesDataArray}
        case SET_FILTER_VALUE:
            return {...state, tableItem: state.tableItem}
        // case SET_SORT_PARAMS:
        //     return {...state, tableItem: state.tableItem.sort( function (direction, titleForSort) {
        //         if (direction == 'true') {
        //         return
        //         }
        //         else if (direction == 'false') {
        //
        //         }
        //         } )}
        case SET_SORT_PARAMS:
            let res = {
                ...state,
                tableItem: state.tableItem.slice().sort((a, b) => {
                    debugger
                    if (action.direction === false) {
                        if (a[action.titleForSort] < b[action.titleForSort]) {
                            return -1;
                        }
                        if (a[action.titleForSort] > b[action.titleForSort]) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    } else if (action.direction === true) {
                        if (a[action.titleForSort] > b[action.titleForSort]) {

                            return -1;
                        }
                        if (a[action.titleForSort] < b[action.titleForSort]) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    }


                })
            }
            debugger
            return res

        // return {...state, tableItem: state.tableItem.sort( function (direction, titleForSort) {
        //     debugger
        //     let sortValueA = Object.keys(titleForSort)
        //
        //         if (direction == 'true') {
        //             return
        //         }
        //         else if (direction == 'false') {
        //
        //         }
        //     } )}
        default:
            return state
    }
}

// items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//
//     // names must be equal
//     return 0;
// });

export const actions = {
    SetSortParams: (direction, titleForSort) => {

        return ({type: SET_SORT_PARAMS, direction, titleForSort})
    },
    SetFilterValue: (filterValue) => {

        return ({type: SET_FILTER_VALUE, filterValue})
    }
}


// export const actions = {
//     SetSortParams: (direction, titleForSort ) => {
//         return ({type: SET_SORT_PARAMS, payload: {direction, titleForSort} })
//     }
// }
