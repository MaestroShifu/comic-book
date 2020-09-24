import { connect } from "react-redux";
import { combineReducers, Store, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import { syncData, isLoading } from "./app/AppAction";
import { appReducer } from "./app/AppReducer";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
    app: appReducer,
});

const mapStateToProps = (state: RootState) => {
    const globalState = {
        app: state.app
    }
    return { globalState };
};

const mapDispatchToProps = () =>  {
    const globalActions = {
        syncData: syncData,
        isLoading: isLoading
    }
    return { globalActions };
}
  
export type GlobalState = ReturnType<typeof mapStateToProps>;
export type GlobalDispatch = ReturnType<typeof mapDispatchToProps>;

export const ConnectRedux = connect(mapStateToProps, mapDispatchToProps);

export const configureStore = (): Store<RootState> => {
    const store = createStore(rootReducer, undefined, applyMiddleware(ReduxThunk));
    return store;
}