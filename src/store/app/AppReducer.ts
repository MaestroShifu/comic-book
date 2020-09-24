import { AppActionTypes, AppState, SYNC_DATA, IS_LOADING } from "./AppTypes";

const initialState: AppState = {
    isLoading: false,
    issues: [],
    totalIssues: 0,
}

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
    const currentState = { ...state };
    switch (action.type) {
        case SYNC_DATA: {
            currentState.issues = [...action.payload.issues];
            currentState.totalIssues = action.payload.totalIssues;
            break;
        }
        case IS_LOADING: {
            currentState.isLoading = !state.isLoading; 
            break;
        }
        default:
            return currentState;
    }
    return currentState;
}