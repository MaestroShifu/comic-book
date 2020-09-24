import React from 'react';
import { WrapperCardIssue } from './WrapperCardIssue.styled';
import { CardStyled } from '../../atoms/Card/Card.styled';
import { CardContent, Typography } from '@material-ui/core';

type ICardIssueProps = {
    sourceImg: string;
    name: string;
    issueNumber: number;
    dateAdded: string;
    isList: boolean;
}

export const CardIssue: React.FunctionComponent<ICardIssueProps> = (props) => {
    const date = new Date(props.dateAdded);
    const dateAdded = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    return (
        <WrapperCardIssue>
            <CardStyled type={props.isList ? 'list' : 'grid'}>
                <img className='img-issue' src={props.sourceImg} />
                <CardContent className={props.isList ? 'content-card' : ''}>
                    <Typography align='center' variant="body1" component="p">
                        <strong>{ `${props.name} #${props.issueNumber}` }</strong>
                    </Typography>
                    <Typography align='center' variant="body2" component="p" color='textSecondary'>
                        { dateAdded }
                    </Typography>
                </CardContent>
            </CardStyled>
        </WrapperCardIssue>
    );
}