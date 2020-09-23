// Manage models
export type AppState = {

}

// Actions
export const SYNC_DATA = 'SYNC_DATA';

interface SyncState {
    type: typeof SYNC_DATA
}

export type AppActionTypes = SyncState; 