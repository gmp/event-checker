var config = require('./config');

var StubHub = require('../stubhub');

var stubHubClient_sandbox = new StubHub({
    username: config.USERNAME,
    password: config.PASSWORD,
    appToken: config.SANDBOX.APP_TOKEN,
    consumerKey: config.SANDBOX.CONSUMER_KEY,
    consumerSecret: config.SANDBOX.CONSUMER_SECRET,
    sandbox: true,
});

var stubHubClient = new StubHub({
    username: config.USERNAME,
    password: config.PASSWORD,
    appToken: config.PRODUCTION.APP_TOKEN,
    consumerKey: config.PRODUCTION.CONSUMER_KEY,
    consumerSecret: config.PRODUCTION.CONSUMER_SECRET,
});

// stubHubClient.login();
// stubHubClient.on('login:error', function(e) {
//     console.log('LOGIN ERROR', e);
// });
// stubHubClient.on('login:success', function(userID) {
//     console.log('LOGIN SUCCESS', userID);
// });

// stubHubClient.search({
//     eventid: 9176687
// }, function(err, res, body) {
//     if (err) {
//         return console.log('ERROR:', err);
//     }

//     console.log(body);
// });
