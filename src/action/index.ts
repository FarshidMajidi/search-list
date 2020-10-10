import http from '../services/httpService'
import * as actionTypes from '../constants/actionTypes'
import {baseUrlApi, key, cx} from '../config.json'
import {Item, SearchVm} from "./search-vm";

export const fetchDataAsync = (query: string) => {
    return async (dispatch: any) => {
        dispatch(getSearchStarted());
        try {
            const res = await http.get<SearchVm>(`${baseUrlApi}?key=${key}&cx=${cx}&q=${query}`);
            dispatch(getSearchSuccess(res.data.items));
        } catch (error) {
            dispatch(getSearchFailure(error));
        }
    };
};

const getSearchSuccess = (data: Item[]) => ({
    type: actionTypes.GetSearchSuccess,
    payload: {data}
});

const getSearchStarted = () => ({
    type: actionTypes.GetSearchStarted
});

const getSearchFailure = (error: any) => ({
    type: actionTypes.GetSearchFailure,
    payload: {
        error
    }
});

export const resetSearch = () => ({
    type: actionTypes.ResetSearch
});
