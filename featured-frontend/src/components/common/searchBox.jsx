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

const SearchBox = ({ value, onChange }) => {
    return ( 
        <CInput
            type="text"
            name="query"
            className="form-control my-3"
            autoComplete="off"
            placeholder="Search..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
     );
};
 
export default SearchBox;
