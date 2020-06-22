import styled from 'styled-components';

const HeaderText = styled.p`
    text-align: center;
    color: ${(props) => props.color || '#303B58'};
    font-size: ${(props) => props.size || '24px'};
    font-weight: 500;
`;

export { HeaderText };
