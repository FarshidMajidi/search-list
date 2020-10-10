import {combineReducers} from "redux";
import {searchReducer} from "./search";

export const rootReducer = combineReducers({
    searchList: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>
