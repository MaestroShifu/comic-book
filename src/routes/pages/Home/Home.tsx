import React, { useState, useEffect } from 'react';
import { ConnectRedux } from '../../../store';
import { PageProps } from '../../Routes';
import { SimpleView } from '../../../components/templates/SimpleView/SimpleView';
import { useDispatch } from 'react-redux';
import { CardIssue } from '../../../components/molecules/CardIssue/CardIssue';
import { LIMIT_PER_PAGE } from '../../../services/ComicApi';
import { useHistory } from 'react-router';

const Home: React.FunctionComponent<PageProps> = (props) => {
    const { app } = props.globalState;
    const { syncData, getIssueData } = props.globalActions;
    const dispatch = useDispatch();
    const [isList, setIsList] = useState<boolean>(true);
    const [page, setPage] = React.useState(1);
    const history = useHistory();
    
    const count = app.totalIssues / LIMIT_PER_PAGE;
    const offset = LIMIT_PER_PAGE * (page - 1);

    useEffect(() => {
        dispatch(syncData(offset));
        window.scrollTo(0, 0);
    }, [dispatch, syncData, offset]);
    
    const handleView = async () => {
        setIsList(!isList);
    }

    const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handleSelect = async (url: string) => {
        dispatch(await getIssueData(url));
        history.push('/comic-details');
    }
    
    const issuesCard = app.issues.map(issue => <CardIssue key={`${issue.issue_number}_${issue.volume.name}`} isList={isList} issue={issue} handleSelect={handleSelect} />); 
    return (
        <SimpleView countPage={count} page={page} handleChangePage={handleChangePage} handleView={handleView} isList={isList} isLoading={app.isLoading} >
            { issuesCard }
        </SimpleView>
    );
}

export const HomePage = ConnectRedux(Home);