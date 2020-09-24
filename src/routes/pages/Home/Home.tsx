import React, { useState, useEffect } from 'react';
import { ConnectRedux } from '../../../store';
import { PageProps } from '../../Routes';
import { SimpleView } from '../../../components/templates/SimpleView/SimpleView';
import { useDispatch } from 'react-redux';
import { CardIssue } from '../../../components/molecules/CardIssue/CardIssue';

const Home: React.FunctionComponent<PageProps> = (props) => {
    const { app } = props.globalState;
    const { syncData } = props.globalActions;
    const dispatch = useDispatch();
    const [isList, setIsList] = useState<boolean>(true);

    useEffect(() => {
        dispatch(syncData());
    }, [dispatch, syncData]);
        
    const handleView = async () => {
        setIsList(!isList);
    }

    const issuesCard = app.issues.map(issue => <CardIssue key={`${issue.issue_number}_${issue.volume.name}`} isList={isList} dateAdded={issue.date_added} issueNumber={issue.issue_number} sourceImg={issue.image.original_url} name={issue.volume.name} />); 

    return (
        <SimpleView handleView={handleView} isList={isList} isLoading={app.isLoading}>
            { issuesCard }
        </SimpleView>
    );
}

export const HomePage = ConnectRedux(Home);