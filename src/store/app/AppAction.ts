import { AppActionTypes, SYNC_DATA, IS_LOADING } from "./AppTypes";

export const syncData = async (): Promise<AppActionTypes> => {
    return {
        type: SYNC_DATA,
    }
}

export const isLoading = (): AppActionTypes => {
    return {
        type: IS_LOADING
    }
}