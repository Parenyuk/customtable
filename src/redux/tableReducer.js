
// const initialState = {
//     tableTitle: [
//         'Number', 'Customer', 'Status', 'Actual', 'Total', 'Type', 'Create date', 'Close Data', 'Country'
//     ],
//
//     tableItem: {
//         number: [
//             23, 45, 66, 40, 45, 56, 70
//         ],
//         customer: [
//             'Admin', 'User', 'Admin', 'User', 'Admin', 'User', 'Admin'
//         ],
//         status: ['Processing', 'Paid', 'Cancelled'],
//         actual: [1000, 10, 100, 120, 10, 100, 120],
//         total: [1000, 10, 100, 120, 10, 100, 120],
//         type: ['Product', 'Company'],
//         // createData:
//         // closeData: ,
//         country: ['Ukraine, Belarus, Latvia, Italia, Spain, France, Germany, Moldovaor ']
//     },
//     number: [
//         23, 45, 66, 40, 45, 56, 70
//     ],
//     customer: [
//         'Admin', 'User', 'Admin', 'User', 'Admin', 'User', 'Admin'
//     ]
// }

const today = new Date().toDateString();

const initialState = {
    // tableTitle: [
    //     'Number', 'Customer', 'Status', 'Actual', 'Total', 'Type', 'Create date', 'Close Data', 'Country'
    // ],
    // tableTitle: [
    //     {number: {type: 'input', title: 'Number'},
    //         customer: {type: 'input', title: 'Customer'},
    //
    //         customer: 'Customer', status: 'Status', actual: 'Actual', total: 'Total', type: 'Type',
    //         createData: 'Create date', closeData: 'Close Data', country:'Country'}
    // ],
    tableTitle: [
        {number: 'Number',
            customer: 'Customer', status: 'Status', actual: 'Actual', total: 'Total', type: 'Type',
            createData: 'Create date', closeData: 'Close Data', country:'Country'}
    ],
    tableItem: [
        {number: 23, customer: 'Admin', status: 'Processing',  actual: 1000, total: 10,  type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'},
        {number: 23, customer: 'Admin', status: 'Processing',  actual: 1000, total: 10,  type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'},
        {number: 23, customer: 'Admin', status: 'Processing',  actual: 1000, total: 10,  type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'},
        {number: 23, customer: 'Admin', status: 'Processing',  actual: 1000, total: 10,  type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'},
        {number: 23, customer: 'Admin', status: 'Processing',  actual: 1000, total: 10,  type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'},
        {number: 23, customer: 'Admin', status: 'Processing',  actual: 1000, total: 10,  type: 'Product',
            createData: today, closeData: today, country: 'Ukraine'}
    ],








    //
    // tableItem: {
    //     number: [
    //         23, 45, 66, 40, 45, 56, 70
    //     ],
    //     customer: [
    //         'Admin', 'User', 'Admin', 'User', 'Admin', 'User', 'Admin'
    //     ],
    //     status: ['Processing', 'Paid', 'Cancelled'],
    //     actual: [1000, 10, 100, 120, 10, 100, 120],
    //     total: [1000, 10, 100, 120, 10, 100, 120],
    //     type: ['Product', 'Company'],
    //     // createData:
    //     // closeData: ,
    //     country: ['Ukraine, Belarus, Latvia, Italia, Spain, France, Germany, Moldovaor ']
    // },
    // number: [
    //     23, 45, 66, 40, 45, 56, 70
    // ],
    // customer: [
    //     'Admin', 'User', 'Admin', 'User', 'Admin', 'User', 'Admin'
    // ]
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_SEARCH_REPOSITORIES:
        //     return {...state, repositoriesDataArray: action.repositoriesDataArray}
        default:
            return state
    }
}
