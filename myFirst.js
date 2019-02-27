//Experimenting with Node.js
//==========================

/*
    //So Far: 
    // - You used NPM to install axios and are doing a simple get request to get the reddit homepage data as JSON.

const axios = require('axios');

axios.get('https://www.reddit.com/.json').then(response => {

    response.data.data.children.forEach(l => {

        console.log(

            {
                title: l.data.title, 
                subreddit: `r/${l.data.subreddit}`, 
                link: `reddit.com${l.data.permalink}`
            }

        );
        
    });

});
*/
    

const url = require('url');
const http = require('http');
const readline = require('readline');
const myCustomModule = require('./myTestModule');

console.log(4 + 5 / 10 * 3);




http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<p style="font-family: Helvetica;">This is the current date and time: ${myCustomModule.getCurrentTime()}</p>`);
    res.end();

    //const urlObj = url.parse(req.url, true);

}).listen(8080);

//Continue with the W3Schools Node.js Tutorial https://www.w3schools.com/nodejs/nodejs_filesystem.asp

/*

const userInput = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

});

userInput.question('Enter a number. ', userInput => myCustomModule.getFactorialSum(Number(userInput)));

*/