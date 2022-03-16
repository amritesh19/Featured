import React from 'react';
import  styled  from 'styled-components';

const CInput = styled.input`
    border: 1px solid black;
    &:focus{
        border-color: #01BF71;
        box-shadow: 0 0 0 0.2rem rgb( 1 191 113 / 25%);
    }
    
    //background-color: rgb(1 191 113 / 25%)!important;
    
`;

const Input = ({ name, label, error, ...rest }) => {
    return ( 
        <div className="form-group ">
            <label htmlFor={name}>{label}</label>
            <CInput {...rest} name={name} id={name} className="form-control" autoComplete="off"/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;
