// criando um mock library para servir de override na snapshot usada no teste
const moment = require.requireActual('moment');

export default (timestamp = 0) => { 
    return moment(timestamp);
};