import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);
