import {combineReducers, createStore} from 'redux';
import {tableReducer} from './tableReducer';


const rootReducer = combineReducers(
    {
        tablePage: tableReducer,
    }
)

export const store = createStore(rootReducer);
