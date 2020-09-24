// import { Fragment } from 'react';
import styled from 'styled-components';

export const WrapperCardIssue = styled.div`
    .img-issue {
        width: 20rem;
        height: 25rem;
    }
    .content-card {
        width: 100%;
    }
    @media (max-width: 1280px) {
        .img-issue {
            width: 15rem;
            height: 20rem;
        }
    }
    @media (max-width: 960px) {
        .img-issue {
            width: 10rem;
            height: 15rem;
        }
    }
`;