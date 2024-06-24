import styled from "styled-components";

const Button = styled.button`

    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #2a5b84;
    background-color: #2a5b84;
    color: #fefae1;
    border-radius: 10px;
    margin-right: 3px;
  
  &:hover,
  &:active {
    background-color: #2a5c84b2;
    border-color: #2a5c84b2;
  }
`
export default Button