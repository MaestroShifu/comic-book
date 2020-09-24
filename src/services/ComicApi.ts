import axios from 'axios';
import { IIssue } from '../store/app/AppTypes';

const PROXY_URL = 'https://lit-badlands-08756.herokuapp.com/'; // Cors problem fuc***
const HOST: string = `https://comicvine.gamespot.com/api`;
const API_KEY: string = `9e9a7f0853639f65d040365a1533b6081e91ccbd`;

const FIELD_LIST: string[] = ['image', 'date_added', 'name', 'issue_number', 'volume']; // Change field modal issues

export const getIssues = async (): Promise<IGetIssuesResquest> => {
    const params: IGetIssuesParams = {
        api_key: API_KEY,
        field_list: FIELD_LIST.join(','),
        format: 'json',
        // limit: limit,
        // offset: offset
    };
    const request = await axios.get(`${PROXY_URL}${HOST}/issues`, { params }); 
    return request.data as IGetIssuesResquest;
}

// Params
type IGetIssuesParams = {
    api_key: string;
    field_list: string;
    format: 'json';
    // limit: number;
    // offset: number;
}

// Requests
type IGetIssuesResquest = {
    error: string;
    limit: number;
    offset: number;
    number_of_page_results: number;
    number_of_total_results: number;
    status_code: StatusCode;
    results: IIssue[];
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