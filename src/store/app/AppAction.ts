import { AppActionTypes, SYNC_DATA } from "./AppTypes";

export const syncData = async (): Promise<AppActionTypes> => {
    return {
        type: SYNC_DATA,
    }
}