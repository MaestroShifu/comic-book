// Manage models
export interface IIssue {
    image: IImageIssue; // Main image of the issue.
    date_added: string; // Date the issue was added to Comic Vine.
    name: string | null; // Name of the issue.
    issue_number: number; // The number assigned to the issue within the volume set.
    volume: IVolumeIssue; // The volume this issue is a part of.
    api_detail_url: string; // URL pointing to the issue detail resource.
}

interface IVolumeIssue {
    api_detail_url: string;
    id: number;
    name: string;
    site_detail_url: string;
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

export type IIssueData = Omit<IGetIssue, 'character_credits' | 'concept_credits' | 'location_credits' | 'team_credits'> & IExtraDataIssue; 

interface IExtraDataIssue {
    character_credits: IGetGenericData[];
    concept_credits: IGetGenericData[];
    location_credits: IGetGenericData[];
    team_credits: IGetGenericData[];
}

export interface IGetIssue {
    id: number;
    character_credits: IIssueDataGeneric[];
    concept_credits: IIssueDataGeneric[];
    image: IImageIssue;
    location_credits: IIssueDataGeneric[];
    team_credits: IIssueDataGeneric[];
    volume: IVolumeIssue;
}

export interface IGetGenericData {
    id: number;
    image: IImageIssue;
    name: string;
}

interface IIssueDataGeneric {
    api_detail_url: string;
    id: number;
    name: string;
    site_detail_url: string;
}

// State
export type AppState = {
    isLoading: boolean;
    issues: IIssue[];
    issue: IIssueData | undefined;
    totalIssues: number;
}

// Actions
export const SYNC_DATA = 'SYNC_DATA';
export const GET_ISSUE_DATA = 'GET_ISSUE_DATA';
export const IS_LOADING = 'IS_LOADING';

interface SyncState {
    type: typeof SYNC_DATA,
    payload: {
        issues: IIssue[];
        totalIssues: number;
    }
}

interface GetIssue {
    type: typeof GET_ISSUE_DATA,
    payload: {
        issue: IIssueData;
    }
}

interface ChangeLoading {
    type: typeof IS_LOADING
}

export type AppActionTypes = SyncState | ChangeLoading | GetIssue; 