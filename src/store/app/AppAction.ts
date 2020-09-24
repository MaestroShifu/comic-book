import { Dispatch } from "redux";
import { AppActionTypes, SYNC_DATA, IS_LOADING } from "./AppTypes";
import { getIssues } from "../../services/ComicApi";

export const syncData = () => async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(isLoading());
    try {
        const request = await getIssues();
        dispatch({
            type: SYNC_DATA,
            payload: {
                issues: request.results 
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