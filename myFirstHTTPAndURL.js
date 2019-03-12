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

console.log('Running on port 8080...');

//Experimenting with HTTP Module--------------
http.createServer(function (req, res) {

    const urlObj = url.parse(req.url, true); //<-- Experimenting with URL Module FOR MORE ON THIS SEE BOTTOM

    res.writeHead(404, {'Content-Type': 'text/html'});

    if (urlObj.path === '/get-current-time') {

        res.write(`<p style="font-family: Helvetica;">This is the current date and time: ${myCustomModule.getCurrentTime()}</p>`);
        return res.end();

    }

    else {

        const fullUrl = req.headers.host + req.url;

        fs.readFile('index.html', function(err, data) {

            if (err) {
 
                return res.end('404 Not Found');

            }

            res.write(data);

            if (fullUrl.split('/')[1].length !== '') {

                const urlParseObj = url.parse(fullUrl, true);

                if (urlParseObj.search) {

                    res.write(`<p style="font-family: Helvetica;">url.parse(${fullUrl}, true).search returns ${urlParseObj.search}</p>`);
                    res.write(`<p style="font-family: Helvetica;">url.parse(${fullUrl}, true).query returrns ${JSON.stringify(urlParseObj.query)}</p>`);

                }
                
            }

            return res.end();
            
        }); 

    }


}).listen(8080);

