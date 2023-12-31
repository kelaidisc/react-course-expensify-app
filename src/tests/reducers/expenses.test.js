import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'New',
        note: '',
        amount: 1950,
        createdAt: 0
    }
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense })

    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const action = {
        id: expenses[0].id,
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'New'
        }
    }
    const state = expensesReducer(expenses, action);

    expect(state[0].note).toBe('New');
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'New3'
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});