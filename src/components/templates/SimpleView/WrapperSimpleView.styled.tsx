import styled from 'styled-components';

interface IWrapperSimpleViewProps {
    isList: boolean;
}

const isList = (props: IWrapperSimpleViewProps) => props.isList ? list : grid;

export const WrapperSimpleView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .select-btn {
        color: #318a4d;
    }
    .container-comic {
        width: 80vw;
        display: flex;
        ${isList}
    }
`;

const list: string = `
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
`;

const grid: string = `
    flex-wrap: wrap;
    justify-content: space-around;
`;