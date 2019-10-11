import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';
// Casos de teste para as Actions de expense
// teste de Remove Expense Action
test('should setup remove expense action object', ()=>{
    const action = removeExpense({ id: '123abc'});
    // para comparar objetos ou arrays usa-se to equal
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
// teste de Edit Expense Action
test('should setup edit expense action changes', ()=>{
    const action = editExpense('123abc', {description: 'Conta', amount: 100500, createdAt: 1500, note:'update de teste'});
    // assertiva
    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Conta', amount: 100500, createdAt: 1500, note:'update de teste'
        }
    });
});
// teste de Add Expense Action
test('should setup add expense action object with passed values', ()=>{
    const action = addExpense({description: 'Conta', amount: 100500, createdAt: 1500, note:'add expense teste'});
    // assertiva
    expect(action).toEqual({
        type: 'ADD_EXPENSE',   
        expense:{
            id: expect.any(String),
            description: 'Conta', 
            amount: 100500, 
            createdAt: 1500, 
            note:'add expense teste'
        }
    });
});
// teste de Add Expense Action with Defaults
test('should setup add expense action object with default values', ()=>{
    const action = addExpense();
    // assertiva
    expect(action).toEqual({
        type: 'ADD_EXPENSE',   
        expense:{
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});