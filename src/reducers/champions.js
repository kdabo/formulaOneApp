export const listOfChampions = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHAMPIONS':
            return action.listOfChampions;
        default:
            return state;
    }
};
