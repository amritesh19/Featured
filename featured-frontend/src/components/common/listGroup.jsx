import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    /*  */
    @media (max-width: 780px) {
    float: left;
    }
`;


const ListGroup = props => {
    const { items, textProperty, valueProperty, selectedItem , onItemSelect} = props;

    return (
    <Ul className="list-group">
        {items.map(item => (
            <li 
            onClick = {() => onItemSelect(item)} 
            key = {item[valueProperty]} 
            className = {item === selectedItem ? "list-group-item bg-success text-white" : "list-group-item"}>{item[textProperty]}
            </li>)) }
        
    </Ul>);
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
 
export default ListGroup;