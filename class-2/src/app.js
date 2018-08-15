import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description: 'Rent', amount: 100, createAt: -21000}));
store.dispatch(addExpense({description: 'two', amount: 200, createAt: -1000}));
store.dispatch(setTextFilter('two'));

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpense);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
