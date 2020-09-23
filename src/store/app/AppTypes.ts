// Manage models
export interface IIssue {
    image: IImageIssue; // Main image of the issue.
    date_added: string; // Date the issue was added to Comic Vine.
    name: string | null; // Name of the issue.
    issue_number: number; // The number assigned to the issue within the volume set.
}

interface IImageIssue {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: string;
}

export type AppState = {
    isLoading: boolean;
    issues: IIssue[];
}

// Actions
export const SYNC_DATA = 'SYNC_DATA';
export const IS_LOADING = 'IS_LOADING';

interface SyncState {
    type: typeof SYNC_DATA
}

interface ChangeLoading {
    type: typeof IS_LOADING
}

export type AppActionTypes = SyncState | ChangeLoading; 