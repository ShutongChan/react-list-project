import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

const countReducers = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
   
};

const store = createStore(countReducers);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//unsubscribe();

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 2 }));

store.dispatch(setCount());

store.dispatch(resetCount());




