import React from 'react';
import styled from 'styled-components';

const CSelect = styled.select`
    border: 1px solid black;
    &:focus{
        border-color: #01BF71;
        box-shadow: 0 0 0 0.2rem rgb( 1 191 113 / 25%);
    }
    
`;

const Select = ({ name, label, options, error, ...rest }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <CSelect name={name} id={name} {...rest} className="form-control" >
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                </option>
                ))}
            </CSelect>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Select;
