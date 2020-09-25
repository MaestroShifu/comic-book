import React from 'react';
import { WrapperItemData } from './WrapperItemData.styled';
import { Avatar, Typography } from '@material-ui/core';
import { IGetGenericData } from '../../../store/app/AppTypes';

interface ItemDataProps {
    dataGenric: IGetGenericData;
}

export const ItemData: React.FunctionComponent<ItemDataProps> = (props) => {
    return (
        <WrapperItemData>
            <Avatar className='avatar-item' alt={props.dataGenric.name} src={props.dataGenric.image.icon_url}>{props.dataGenric.name[0]}</Avatar>
            <Typography variant='body1'>
                { props.dataGenric.name }
            </Typography>
        </WrapperItemData>
    );
}