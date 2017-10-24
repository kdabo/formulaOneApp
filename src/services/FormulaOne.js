var api = require('../api');

export function fetchChampions(callback) {
     api.getChampions( 2005, [], function (yearNext, listOfChamps) {
         callback(listOfChamps);
     });
}

export function fetchWinners(year, callback) {
    api.getRaceWinners(year, [], function (yearNext, listOfRaceWinners) {
        callback(listOfRaceWinners);
    });
}
