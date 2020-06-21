import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    position: relative;

    width: 100%;
    height: 32px;
    background: #ececf6;
    border-radius: 3px;
    color: #8f9bb9;
    font-weight: medium;
`;

const InputContainer = styled.input`
    position: abslute;

    width: 100%;
    height: 100%;

    background: none;
    border: none;
    outline: none;

    font-size: 14px;
    color: #7d90bd;

    padding: 0 12px;
    padding-left: 38px;

    &::placeholder {
        color: #8f9bb9;
    }
`;

const IconContainer = styled.label`
    position: absolute;
    width: 34px;
    height: 32px;
    padding: 5px 11px;

    & svg {
        fill: #93a1c1;
    }
`;

export default function Input({ style, type = 'text', name, icon, placeholder, required, onChange }) {
    return (
        <Container style={style}>
            <IconContainer htmlFor={name}>{icon}</IconContainer>
            <InputContainer type={type} name={name} placeholder={placeholder} required={required} onChange={onChange} />
        </Container>
    );
}
