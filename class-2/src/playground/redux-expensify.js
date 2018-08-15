import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const addExpense = (
    {
        id = uuid(),
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    }
) =>({
    type: 'ADD_EXPENSE',
    expense: {
        id,
        description,
        note,
        amount,
        createAt,
    }
});

const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseReducerDefault = [];

const expenseReducer = (state = expenseReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((item) => item.id != action.id);
        case 'EDIT_EXPENSE':
            return state.map((item,index) => {
                if (action.id === item.id) {
                    return {
                        ...item,
                        ...action.update
                    }
                }
                else {
                    return expense
                }
            });
        default: 
            return state;
    }

};

const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        }
        else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};



const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'two', amount: 200, createAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id ,{ amount: 500 }));

//store.dispatch(setTextFilter('two'));

// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate());
// store.dispatch(setStartDate(123));
// store.dispatch(setEndDate(-12456));

const demoState = {
    expenses: [{
        id: 'id-test01',
        description: 'this is description',
        note: 'this is a note',
        amount: 5400,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


