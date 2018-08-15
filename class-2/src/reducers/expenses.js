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

export default expenseReducer