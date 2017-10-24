var superagent = require('superagent');

module.exports.getChampions = function getChampions (year, listOfChampions, callback) {
    if (year === 2016) {
        return callback(year, listOfChampions)
    }
    superagent
        .get(`http://ergast.com/api/f1/${year}/driverStandings.json`)
        .end((err, res) => {
            //push champ to array
            listOfChampions.push({driver: res.body.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver});
            return getChampions(year + 1, listOfChampions, callback);
        })
};

module.exports.getRaceWinners = function getRaceWinners (year, raceWinners, callback) {
    superagent
        .get(`http://ergast.com/api/f1/${year}/results/1.json`)
        .end((err, res) => {
            const raceWinners = res.body.MRData.RaceTable.Races;
            return callback(year, raceWinners)
        })
};
