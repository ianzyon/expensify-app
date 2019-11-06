import React from 'react';
// importar uma action generator de REMOVE
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// stateless funcitional component
// description, amount, createdAt
const ExpenseListItem = ({id,description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Amount: {numeral(amount / 100).format('$0,0.00')} - Created at: {moment(createdAt).format('MM Do, YYYY')}</p>
        
    </div>
)

export default (ExpenseListItem);