import styled  from 'styled-components';
import { LinkR } from 'react-router-dom';


export const Link = styled(LinkR)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 1rem 1rem;
height: 100%;
cursor: pointer;
font-size: 16px;
font-weight: 600;

&:hover{
        text-decoration: none;
        color: #01bf71;
        transition: 0.2s ease-in-out;
    };
&.active {
    border-bottom: 3px solid #01bf71;
}
`;


export const NavLink = styled(LinkR)`
    border-radius:20px;
    background: #010606;
    white-space: nowrap;
    padding: 5px 10px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
//box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

&:hover{
    text-decoration: none;
    background: #13c24f;
    color: #fff;
}
`;