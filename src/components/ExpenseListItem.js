import React from 'react';
// importar uma action generator de REMOVE
import { Link } from 'react-router-dom';

// stateless funcitional component
// description, amount, createdAt
const ExpenseListItem = ({id,description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Amount: {amount} - Created at: {createdAt}</p>
        
    </div>
)

export default (ExpenseListItem);