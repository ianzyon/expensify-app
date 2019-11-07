// Get total selector - retorna o valor total dos amounts de todas as expenses criadas
const selectExpensesTotal = (expenses) =>{
    // verifica se possie expense além de filtrar se o tipo de certo foi enviado ao seletor
    if(expenses.length === 0 || typeof expenses !== 'object'){
        return 0;
    } else {
        // cria um array com apenas os valores dos amounts de cada expense no state
        const arrAmounts = expenses.map((expense)=>{
            return expense.amount;
        });
        // retorna um número equivalente a soma de todos os valores do array anterior
        return arrAmounts.reduce((am_prev, am)=>{
            return am_prev + am;
        });
    }
};
export default selectExpensesTotal;

// expenses = [{amount: 100}, {amount: 250}];
// console.log(typeof expenses);
// console.log(expenses.length);
// console.log(selectExpensesTotal(expenses));

