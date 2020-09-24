import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { WrapperSimpleView } from './WrapperSimpleView.styled';
import { DividerStyled } from '../../atoms/Divider/Divider.styled';
import { LoadingStyled } from '../../atoms/Loading/Loading.styled';

import AppsIcon from '@material-ui/icons/Apps';
import ReorderIcon from '@material-ui/icons/Reorder';

interface SimpleViewProps {
    isList: boolean;
    isLoading: boolean;
    handleView: () => void;
}

export const SimpleView: React.FunctionComponent<SimpleViewProps> = (props) => {
    return (
        <WrapperSimpleView isList={props.isList}>
            { props.isLoading && <LoadingStyled /> }

            <Typography variant='h3'>
                Comic Book
            </Typography>

            <DividerStyled>
                <Typography variant='body1'>
                    <strong>Latest Issues</strong>
                </Typography>

                <div>
                    <Button onClick={props.handleView} className={props.isList ? 'select-btn' : ''}>
                        <ReorderIcon />
                        List
                    </Button>
                    <Button onClick={props.handleView} className={!props.isList ? 'select-btn' : ''}>
                        <AppsIcon />
                        Grid
                    </Button>
                </div>
            </DividerStyled>

            <div className='container-comic'>
                { props.children }
            </div>
        </WrapperSimpleView>
    );
}