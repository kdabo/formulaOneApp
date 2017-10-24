import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loading } from './http';
import { listOfChampions } from './champions';
import { listOfRaceWinners } from "./winners";

// here combineReducers is use to split the main reducer into smaller ones
export const reducer = combineReducers({
    loading,
    listOfChampions,
    listOfRaceWinners,
    // this one is a special reducer to sync the router with the redux store
    routing: routerReducer
});
