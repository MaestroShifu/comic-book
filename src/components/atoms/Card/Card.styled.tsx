import styled from 'styled-components';
import { Card } from '@material-ui/core';

interface ICardStyledProps {
    type: 'list' | 'grid';
}

const margin = (props: ICardStyledProps) => props.type === 'grid' ? 'margin: 1rem;' : 'margin: 1rem 0px;' ;  
const flexDirection = (props: ICardStyledProps) => props.type === 'grid' ? 'flex-direction: column;' : 'flex-direction: row;' ;
const justifyContent = (props: ICardStyledProps) => props.type === 'list' ? 'justify-content: space-between;' : '';
const maxWith = (props: ICardStyledProps) => props.type === 'grid' ? 'max-width: 20rem;' : 'width: 60rem;';

export const CardStyled = styled(Card)`
    display: flex;
    margin: 1rem;
    ${margin}
    ${flexDirection}
    ${justifyContent}
    ${maxWith}
`;