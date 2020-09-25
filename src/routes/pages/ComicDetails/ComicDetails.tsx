import React from 'react';
import { ConnectRedux } from '../../../store';
import { DescriptionView } from '../../../components/templates/DescriptionView/DescriptionView';
import { PageProps } from '../../Routes';
import { useHistory } from 'react-router';
import { DescriptionSection } from '../../../components/organisms/DescriptionSection/DescriptionSection';

const ComicDetails: React.FunctionComponent<PageProps> = (props) => {
    const { app } = props.globalState;
    const history = useHistory();

    if(!app.issue && !app.isLoading) { // Redirect no data
        history.push('/');
    }

    const character = <DescriptionSection title='Characters' dataGenric={app.issue?.character_credits} />;
    const concept = <DescriptionSection title='Concepts' dataGenric={app.issue?.concept_credits} />; 
    const team = <DescriptionSection title='Teams' dataGenric={app.issue?.team_credits} />; 
    const location = <DescriptionSection title='Locations' dataGenric={app.issue?.location_credits} />; 

    return (
        <DescriptionView imgSrc={app.issue?.image.original_url} isLoading={app.isLoading}>
            { character }
            { team }
            { location }
            { concept }
        </DescriptionView>
    );
}

export const ComicDetailsPage = ConnectRedux(ComicDetails);