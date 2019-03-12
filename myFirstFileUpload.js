const fs = require('fs'); 
const url = require('url');
const http = require('http');
const formidable = require('formidable');

console.log('Running on port 8080');

http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Tyoe':'text/html'});

    const urlObj = url.parse(req.url);

    if (urlObj.href === '/fileupload') {

        const form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {

            const oldPath = files.filetoupload.path;
            const newPath = `./uploadedFile.js`;

            fs.rename(oldPath, newPath, function (err) {

                if (err) throw err;

                res.write('File uploaded and moved!');

                res.end();

            });

            res.write('File uploaded');

            res.end();

        });
        
    }

    else if (urlObj.href === '/') {

        fs.readFile('uploadForm.html', function(err, data) {

            if (err) {
 
                return res.end('404 Not Found');

            }

            res.write(data);

            return res.end();

        });

    }

    else {

        res.writeHead(301, { 'Location': `${req.headers.host}` });

        return res.end();

    }

    

    
    

}).listen(8080);


function loopThroughDir(callback) {

    const dirFiles = fs.readdirSync('.');

    for (file of dirFiles) {

        callback(file);

    }

}

function deleteUpLoadedCallback(file) {

    if (file === 'uploadedFile.txt') {

        fs.unlinkSync(filePath);

    }

}
