import styled from 'styled-components';

export const WrapperItemData = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
    p {
        margin-left: 1rem;
        color: #64a67b;
    }
    .avatar-item {
        border-radius: 15%;
    }
    @media (max-width: 960px) { 
        margin: 0.5rem;
    }
`;