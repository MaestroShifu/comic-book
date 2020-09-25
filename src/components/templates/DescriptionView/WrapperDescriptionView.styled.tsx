import styled from 'styled-components';

export const WrapperDescriptionView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-description {
        display: flex;
        width: 100%;
        margin-top: 0.5rem;
        .container-data {
            flex: 2;
            display: flex;
            flex-direction: column;
            padding: 2rem;
        }
        .container-img {
            flex: 1;
            display: flex;
            justify-content: center;
        }
    }
    @media (max-width: 1280px) {   
        img {
            width: 20rem;
        }
    }
    @media (max-width: 960px) { 
        .container-description {
            .container-data {
                flex: 1;
                padding: 1rem;
            }
            .container-img {
                flex: 1;
            }
        }
    }
`;