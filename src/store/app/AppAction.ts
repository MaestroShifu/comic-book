import { Dispatch } from "redux";
import { AppActionTypes, SYNC_DATA, IS_LOADING, IIssue, IGetIssue, GET_ISSUE_DATA, IGetGenericData, IIssueData } from "./AppTypes";
import { getIssues, getIssue, getGeneric } from "../../services/ComicApi";

export const syncData = (offset: number) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(isLoading());
    try {
        const { results, number_of_total_results } = await getIssues(offset);
        dispatch({
            type: SYNC_DATA,
            payload: {
                issues: results as IIssue[],
                totalIssues: number_of_total_results
            }
        });
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(isLoading());
    }
};

export const getIssueData = (apiDetailUrl: string) => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(isLoading());
    try {
        // Get data issue
        const reqIssue = await getIssue(apiDetailUrl);
        const issue: IGetIssue = reqIssue.results as IGetIssue; 

        // get extra data
        const characters = issue.character_credits.map(ch => getGeneric(ch.api_detail_url)); 
        const teams = issue.team_credits.map(ch => getGeneric(ch.api_detail_url)); 
        const locations = issue.location_credits.map(ch => getGeneric(ch.api_detail_url)); 
        const concepts = issue.concept_credits.map(ch => getGeneric(ch.api_detail_url)); 
        
        // Run request
        const charactersReq = await Promise.all(characters);
        const teamsReq = await Promise.all(teams);
        const locationsReq = await Promise.all(locations);
        const conceptsReq = await Promise.all(concepts);
        
        const issueData: IIssueData = {
            id: issue.id,
            character_credits: charactersReq.map(cha => cha.results as IGetGenericData),
            concept_credits: teamsReq.map(cha => cha.results as IGetGenericData),
            image: issue.image,
            location_credits: locationsReq.map(cha => cha.results as IGetGenericData),
            team_credits: conceptsReq.map(cha => cha.results as IGetGenericData),
            volume: issue.volume,
        }

        dispatch({
            type: GET_ISSUE_DATA,
            payload: {
                issue: issueData
            }
        });
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(isLoading());
    }
};

export const isLoading = (): AppActionTypes => {
    return {
        type: IS_LOADING
    }
}