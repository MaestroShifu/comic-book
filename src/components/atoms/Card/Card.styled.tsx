import styled from 'styled-components';
import { Card } from '@material-ui/core';

interface ICardStyledProps {
    type: 'list' | 'grid';
}

const type = (props: ICardStyledProps) => props.type === 'grid' ? grid : list;

export const CardStyled = styled(Card)`
    display: flex;
    ${type}
`;

const grid: string = `
    margin: 1rem;
    flex-direction: column;
    max-width: 20rem;
    @media (max-width: 1280px) {
        max-width: 15rem;
        margin: 0.5rem;
    }
    @media (max-width: 960px) {
        max-width: 10rem;
        margin: 0.3rem;
    }
`;

const list: string = `
    margin: 1rem 0px;
    flex-direction: row;
    justify-content: space-between;
    width: 60rem;
    @media (max-width: 1280px) {
        width: 46rem;
    }
    @media (max-width: 960px) {
        width: 25rem;
    }
`;