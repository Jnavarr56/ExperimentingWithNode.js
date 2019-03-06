/*
NOTES:
INCLUDE TWO INPUTS ON HTML RENDERING TO REDIRECT WITH PRINTING QUERY STRING PARAMS
*/

//Experimenting with Node.js
//==========================

const fs = require('fs');     //FileSystem Module
const url = require('url');     //URL Module
const http = require('http');   //HTTP Module

//Created my own module.
const myCustomModule = require('./myTestModule'); 


//Experimenting with HTTP Module--------------
http.createServer(function (req, res) {

    const urlObj = url.parse(req.url, true); //<-- Experimenting with URL Module FOR MORE ON THIS SEE BOTTOM

    if (urlObj.path === '/') {

        fs.readFile('index.html', function(err, data) {

            if (err) {

                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 Not Found');

            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        }); 

    }

    else if (urlObj.path === '/get-current-time') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<p style="font-family: Helvetica;">This is the current date and time: ${myCustomModule.getCurrentTime()}</p>`);
        return res.end();

    }

    else {


        res.writeHead(301,
            { Location: '/' }
        );
        return res.end();

    }


}).listen(8080);

//Continue with the W3Schools Node.js Tutorial https://www.w3schools.com/nodejs/nodejs_filesystem.asp


/*
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
*/