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
            const newPath = `./uploadedFile.txt`;

            fs.rename(oldPath, newPath, function (err) {

                if (err) throw err;

                res.write(`Your uploaded file reads:\n\n${fs.readFileSync(newPath, 'utf8')}`);

                res.end();

            });

        });
        
    }

    else if (urlObj.href === '/') {

        deleteUploaded();

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


function deleteUploaded()  {

    const dirFiles = fs.readdirSync('.');

    for (file of dirFiles) {

        if (file === 'uploadedFile.txt') {

            fs.unlinkSync(file);
    
            return;
    
        }

    }

}
