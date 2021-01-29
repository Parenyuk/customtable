const SET_SORT_PARAMS = 'custom_table/tableReducer/SET_SORT_PARAMS';
const SET_FILTER_VALUE = 'custom_table/tableReducer/SET_FILTER_VALUE'

const today = new Date().toDateString();

const initialState = {
    searchValue: {filterValue: '', headerName: ''},
    tableTitle: [
        {
            number: {type: 'number', title: 'Number'},
            customer: {type: 'text', title: 'Customer'},
            status: {type: 'selector', title: 'Status'},
            actual: {type: 'number', title: 'Actual'},
            total: {type: 'number', title: 'Total'},
            type: {type: 'selector', title: 'Type'},
            createData: {type: 'date', title: 'Createdata'},
            closeData: {type: 'date', title: 'Closedata'},
            country: {type: 'text', title: 'Country'}
        }
    ],
    tableItem: [
        {
            number: 23, customer: 'Admin', status: 'Processing', actual: 1000, total: 7, type: 'Company',
            createData: today, closeData: today, country: 'Ukraine'
        },
        {
            number: 16, customer: 'User', status: 'Paid', actual: 100, total: 100, type: 'Company',
            createData: today, closeData: today, country: 'Belarus'
        },
        {
            number: 23, customer: 'Admin', status: 'Cancelled', actual: 100, total: 45, type: 'Product',
            createData: today, closeData: today, country: 'Poland'
        },
        {
            number: 35, customer: 'User', status: 'Cancelled', actual: 16, total: 45, type: 'Company',
            createData: today, closeData: today, country: 'Spain'
        },
        {
            number: 34, customer: 'Admin', status: 'Paid', actual: 1140, total: 56, type: 'Product',
            createData: today, closeData: today, country: 'Germany'
        },
        {
            number: 44, customer: 'Admin', status: 'Processing', actual: 1120, total: 11, type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'
        }
    ],

}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_VALUE:
            return {...state, searchValue: {filterValue: action.filterValue, headerName: action.headerName}}

        case SET_SORT_PARAMS:
            return {
                ...state, tableItem: state.tableItem.slice().sort((a, b) => {
                    debugger
                    if (action.direction === false) {
                        if (a[action.titleForSort] < b[action.titleForSort]) {
                            return -1;
                        }
                        if (a[action.titleForSort] > b[action.titleForSort]) {
                            return 1;
                        }
                        return 0;
                    } else if (action.direction === true) {
                        if (a[action.titleForSort] > b[action.titleForSort]) {

                            return -1;
                        }
                        if (a[action.titleForSort] < b[action.titleForSort]) {
                            return 1;
                        }
                        return 0;
                    }
                })
            }
        default:
            return state
    }
}


export const actions = {
    SetSortParams: (direction, titleForSort) => {
        debugger
        return ({type: SET_SORT_PARAMS, direction, titleForSort})
    },
    SetFilterValue: (filterValue, headerName) => {
        return ({type: SET_FILTER_VALUE, filterValue, headerName})
    }
}


