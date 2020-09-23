import { AppActionTypes, AppState, SYNC_DATA, IS_LOADING } from "./AppTypes";

const initialState: AppState = {
    isLoading: false,
    issues: [],
}

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
    const currentState = { ...state };
    switch (action.type) {
        case SYNC_DATA: {
            console.log('Funciona');
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