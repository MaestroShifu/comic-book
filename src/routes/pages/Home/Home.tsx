import React, { useState, useEffect } from 'react';
import { ConnectRedux } from '../../../store';
import { PageProps } from '../../Routes';
import { SimpleView } from '../../../components/templates/SimpleView/SimpleView';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/app/AppAction';

const Home: React.FunctionComponent<PageProps> = (props) => {
    const { app } = props.GlobalState;
    const dispatch = useDispatch();
    const [isList, setIsList] = useState<boolean>(true);

    useEffect(() => {
        dispatch(isLoading());
    }, [dispatch])

    const handleView = () => {
        setIsList(!isList);
    }

    return (
        <SimpleView handleView={handleView} isList={isList} isLoading={app.isLoading}>
            <h1>Hola</h1>
        </SimpleView>
    );
}

export const HomePage = ConnectRedux(Home);