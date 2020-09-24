import axios from 'axios';
import { IIssue, IGetIssue, IGetGenericData } from '../store/app/AppTypes';

const PROXY_URL = 'https://lit-badlands-08756.herokuapp.com/'; // Cors problem fuc***
const HOST: string = `https://comicvine.gamespot.com/api`;
const API_KEY: string = `9e9a7f0853639f65d040365a1533b6081e91ccbd`;

const FIELD_LIST_ISSUES: string[] = ['image', 'date_added', 'name', 'issue_number', 'volume', 'api_detail_url']; // Change field modal issues

const FIELD_LIST_ISSUE: string[] = ['id', 'image', 'character_credits', 'volume', 'team_credits', 'location_credits', 'concept_credits'];
const FIELD_LIST_GENERIC: string[] = ['id', 'image', 'name'];

export const LIMIT_PER_PAGE: number = 100;

export const getIssues = async(offset: number): Promise<IGetIssuesResquest> => {
    const params: IGetIssuesParams = {
        api_key: API_KEY,
        field_list: FIELD_LIST_ISSUES.join(','),
        format: 'json',
        limit: LIMIT_PER_PAGE,
        offset: offset
    };
    const request = await axios.get(`${PROXY_URL}${HOST}/issues`, { params }); 
    return request.data as IGetIssuesResquest;
}

export const getIssue = async(apiDetailUrl: string): Promise<IGetIssuesResquest> => {
    const params: IGenericParams = {
        api_key: API_KEY,
        field_list: FIELD_LIST_ISSUE.join(','),
        format: 'json'
    }
    const request = await axios.get(`${PROXY_URL}${apiDetailUrl}`, { params }); 
    return request.data as IGetIssuesResquest;
}

export const getGeneric = async(apiDetailUrl: string): Promise<IGetIssuesResquest> => {
    const params: IGenericParams = {
        api_key: API_KEY,
        field_list: FIELD_LIST_GENERIC.join(','),
        format: 'json'
    }
    const request = await axios.get(`${PROXY_URL}${apiDetailUrl}`, { params }); 
    return request.data as IGetIssuesResquest;
}

// Params
type IGetIssuesParams = {
    api_key: string;
    field_list: string;
    format: 'json';
    limit: number;
    offset: number;
}

type IGenericParams = {
    api_key: string;
    field_list: string;
    format: 'json';
}

// Requests
type IGetIssuesResquest = {
    error: string;
    limit: number;
    offset: number;
    number_of_page_results: number;
    number_of_total_results: number;
    status_code: StatusCode;
    results: IIssue[] | IGetIssue | IGetGenericData;
    version: string;
}

type StatusCode = 
    '1' | // OK
    '100' | // Invalid API Key
    '101' | // Object Not Found
    '102' | // Error in URL Format
    '103' | // 'jsonp' format requires a 'json_callback' argument
    '104' | // Filter Error
    '105'; // Subscriber only video is for subscribers only