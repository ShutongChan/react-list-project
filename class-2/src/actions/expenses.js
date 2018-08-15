import uuid from 'uuid';

export const addExpense = (
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

export const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});