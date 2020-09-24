import React from 'react';
import { WrapperCardIssue } from './WrapperCardIssue.styled';
import { CardStyled } from '../../atoms/Card/Card.styled';
import { CardContent, Typography } from '@material-ui/core';
import { IIssue } from '../../../store/app/AppTypes';

type ICardIssueProps = {
    issue: IIssue;
    isList: boolean;
    handleSelect: (url: string) => Promise<void>;
}

export const CardIssue: React.FunctionComponent<ICardIssueProps> = (props) => {
    const date = new Date(props.issue.date_added);
    const dateAdded = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    
    const handleClick = async () => {
        await props.handleSelect(props.issue.api_detail_url);
    }
    
    return (
        <WrapperCardIssue>
            <CardStyled type={props.isList ? 'list' : 'grid'} onClick={handleClick}>
                <img className='img-issue' alt={props.issue.volume.name} src={props.issue.image.original_url} />
                <CardContent className={props.isList ? 'content-card' : ''}>
                    <Typography align='center' variant="body1" component="p">
                        <strong>{ `${props.issue.volume.name} #${props.issue.issue_number}` }</strong>
                    </Typography>
                    <Typography align='center' variant="body2" component="p" color='textSecondary'>
                        { dateAdded }
                    </Typography>
                </CardContent>
            </CardStyled>
        </WrapperCardIssue>
    );
}