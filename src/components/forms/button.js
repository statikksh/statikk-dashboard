import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 32px;

    background: #2875e8;
    border: none;
    outline: none;

    color: #fff;

    transition: background 0.2s;

    &:hover {
        background: #3781f0;
    }

    &:focus {
        box-shadow: 0 0 0 2px rgba(40, 117, 232, 0.45);
    }
`;

export default Button;
