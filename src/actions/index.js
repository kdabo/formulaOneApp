import * as FormulaOneService from '../services/FormulaOne';

export const setHttpLoading = () => {
    return {
        type: 'HTTP_LOADING',
    };
};

export const setHttpLoaded = () => {
    return {
        type: 'HTTP_LOADED',
    };
};

export const setHttpError = (error) => {
    return {
        type: 'HTTP_ERROR',
        error
    };
};

export const setChampions = (listOfChampions) => {
    return {
        type: 'SET_CHAMPIONS',
        listOfChampions
    };
};

export const fetchChampions = () => {
    return dispatch => {
        dispatch(setHttpLoading());
        dispatch(setChampions([]));
        return FormulaOneService.fetchChampions(function(listOfChampions) {
            dispatch(setHttpLoaded());
            dispatch(setChampions(listOfChampions));
            return listOfChampions;
        });
    };
};

export const setWinners = (listOfRaceWinners) => {
    return {
        type: 'SET_WINNERS',
        listOfRaceWinners
    }
};

export const fetchWinners = (year) => {
    return dispatch => {
        dispatch(setHttpLoading());
        dispatch(setWinners([]));
        return FormulaOneService.fetchWinners( year, function (listOfRaceWinners) {
            dispatch(setHttpLoaded());
            dispatch(setWinners(listOfRaceWinners));
            return listOfRaceWinners;
        });
    };
};
