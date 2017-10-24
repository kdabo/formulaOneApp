export const listOfRaceWinners = (state = [], action) => {
    switch (action.type) {
        case 'SET_WINNERS':
            return action.listOfRaceWinners;
        default:
            return state;
    }
};
