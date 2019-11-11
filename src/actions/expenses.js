import database from '../firebase/firebase'

// Expenses Action Generators:
// ADD_EXPENSE
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',   
        expense
    };
};
// causando o dispatch a disparar uma nova funcao gracas ao thunk
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = 0 } = expenseData;// outra maneira de definir o default e ao mesmo tempo setar o conteudo de expenseData para as chaves

        const expense = { description, note, amount, createdAt }
        database.ref('expenses').push(expense) // empurra para o firebase os dados de expense
        .then((ref)=>{ // depois de setar no banco de dados, o state é alterado com um call para dispatch addExpense, isso é feito para usar o id gerado pelo firebase ref.key
            dispatch(addExpense({
                id: ref.key,
                ...expense
                }))
        }).catch((e)=>{console.log(e);});
    };
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    };
};
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});