import { connect } from "react-redux";
import { combineReducers } from "redux";
import { syncData, isLoading } from "./app/AppAction";
import { appReducer } from "./app/AppReducer";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
    app: appReducer,
});

const mapStateToProps = (state: RootState) => {
    const GlobalState = {
        ...state
    }
    return { GlobalState };
};

const mapDispatchToProps = () =>  {
    const GlobalActions = {
        syncData: syncData,
        isLoading: isLoading
    }
    return { GlobalActions };
}
  
export type GlobalState = ReturnType<typeof mapStateToProps>;
export type GlobalDispatch = ReturnType<typeof mapDispatchToProps>;

export const ConnectRedux = connect(mapStateToProps, mapDispatchToProps);