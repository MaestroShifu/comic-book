import React from 'react';
import { ConnectRedux } from '../../../store';
import { PageProps } from '../../Routes';

const Home: React.FunctionComponent<PageProps> = (props) => {
    console.log('xxx', props);
    
    return (
        <h1>home</h1>
    );
}

export const HomePage = ConnectRedux(Home);