import React from 'react';
import { ConnectRedux } from '../../../store';
import { PageProps } from '../../Routes';
import { useHistory } from 'react-router';

const ComicDetails: React.FunctionComponent<PageProps> = (props) => {
    const { app } = props.globalState;
    const history = useHistory();

    if(!app.issue && !app.isLoading) { // Redirect no data
        history.push('/');
    }

    console.log(app.issue);

    return (
        <h1>Details</h1>
    );
}

export const ComicDetailsPage = ConnectRedux(ComicDetails);