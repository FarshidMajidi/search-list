import * as actionTypes from '../constants/actionTypes'
import {Item} from "../action/search-vm";

const initialState = {loading: false, list: [] as Item[], error: null};

export const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GetSearchStarted:
            return {
                loading: true,
                list: [],
                error: null
            };
        case actionTypes.GetSearchSuccess:
            return {
                loading: false,
                list: action.payload.data,
                error: null
            };
        case actionTypes.GetSearchFailure:
            return {
                loading: false,
                list: [],
                error: action.payload.error
            };
        case actionTypes.ResetSearch:
            return {
                loading: false,
                list: [],
                error: null
            };
        default:
            return state;
    }
}
