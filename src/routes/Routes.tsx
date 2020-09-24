import React from 'react';
import { GlobalState, GlobalDispatch } from '../store';
import { RouteComponentProps, Route, Switch } from 'react-router';
import { HomePage } from './pages/Home/Home';
import { ComicDetailsPage } from './pages/ComicDetails/ComicDetails';

interface RouteURL {
    exact: boolean;
    path: string;
    component: React.FunctionComponent<PageProps> | React.ComponentClass<PageProps>;
}

export type PageProps = GlobalState & RouteComponentProps & GlobalDispatch;

export const Routes: React.FunctionComponent = () => {
    const routes: RouteURL[] = [
        {
            exact: true,
            path: '/',
            component: HomePage
        },
        {
            exact: true,
            path: '/comic-details',
            component: ComicDetailsPage
        },
        {
            exact: false,
            path: '*',
            component: HomePage
        }
    ];
    const routeData = routes.map((route, index) => <Route key={`route_${index}`} exact={route.exact} path={route.path} component={route.component} />);  
    return (
        <Switch>
            { routeData }
        </Switch>
    );
}