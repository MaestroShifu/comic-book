import React from 'react';
import { WrapperDescriptionView } from './WrapperDescriptionView.styled';
import { Typography } from '@material-ui/core';
import { LoadingStyled } from '../../atoms/Loading/Loading.styled';

interface IDescriptionViewProps {
    imgSrc: string | undefined;
    isLoading: boolean;
}

export const DescriptionView: React.FunctionComponent<IDescriptionViewProps> = (props) => {
    return (
        <WrapperDescriptionView>
            { props.isLoading && <LoadingStyled /> }
            <Typography variant='h3'>
                Comic Book
            </Typography>
            <div className='container-description'>
                <div className='container-data'>
                    { props.children }
                </div>
                <div className='container-img'>
                    {props.imgSrc && <img src={props.imgSrc} alt='img_comic' />}
                </div>
            </div>
        </WrapperDescriptionView>
    );
}