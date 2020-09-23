import { AppActionTypes, AppState, SYNC_DATA } from "./AppTypes";

const initialState: AppState = {

}

export const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
    const currentState = { ...state };
    switch (action.type) {
        case SYNC_DATA: {
            console.log('Funciona');
            break;
        }
        default:
            return currentState;
    }
    return currentState;
}