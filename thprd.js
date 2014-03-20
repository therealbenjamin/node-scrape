var request = require('request');
var cheerio = require('cheerio');

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

pools = {
    'Aloha': 3,
    'Beaverton': 15,
    'Conestoga': 12,
    'Harman': 11,
    'Raleigh': 6,
    'Somerset': 22,
    'Sunset': 5,
    'Tualatin Hills': 2
};

for (pool in pools) {
    var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
    request(url, ( function(pool) {
        return function(err, resp, body) {
            if (err)
                throw err;
            $ = cheerio.load(body);
            console.log(pool);
            // TODO: scraping goes here!
        }
    } )(pool));
}