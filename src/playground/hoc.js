// Higher Order Component (HOC)
// Objetivos:
// Reuso de Código
// Sequestro de Renderização(render hijacking)
// Prop manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    )
};
// hoc function
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
};
// hoc
const AdminInfo = withAdminWarning(Info);

// hoc function
const inAuthInfo = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Login to View the Content</p> }
        </div>
    );
};

// hoc
const AuthInfo = inAuthInfo(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info='These are the details'/>, document.getElementById('app'));