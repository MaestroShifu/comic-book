import styled from 'styled-components';
import { Divider } from '@material-ui/core';

export const DividerStyled = styled.div`
    border-top: 5px solid #9e9d9d;
    border-bottom: 5px solid #9e9d9d;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 1rem 0px;
    padding: 0.3rem 0px;
`;

export const DividerMatStyled = styled(Divider)`
    height: 5px !important;
    background-color: #9e9d9d !important;
`;