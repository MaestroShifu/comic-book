import React from 'react';
import { WrapperDescriptionSection } from './WrapperDescriptionSection.styled';
import { Typography } from '@material-ui/core';
import { DividerMatStyled } from '../../atoms/Divider/Divider.styled';
import { IGetGenericData } from '../../../store/app/AppTypes';
import { ItemData } from '../../molecules/ItemData/ItemData';

interface DescriptionSectionProps {
    title: string;
    dataGenric: IGetGenericData[] | undefined;
}

export const DescriptionSection: React.FunctionComponent<DescriptionSectionProps> = (props) => {    
    if(!props.dataGenric || (props.dataGenric.length === 0)) {
        return null;
    }
    const data = props.dataGenric.map((dg, key) => <ItemData dataGenric={dg} key={`${key}_${props.title}`} />);
    return (
        <WrapperDescriptionSection>
            <Typography variant='h5'>
                <strong>{ props.title }</strong>
            </Typography>
            <DividerMatStyled />
            <div className='container-description'>
                { data }
            </div>
        </WrapperDescriptionSection>
    );
}
