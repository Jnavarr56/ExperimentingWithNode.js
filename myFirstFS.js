const fs = require('fs');               //FileSystem Module
const readline = require('readline');   //Readline Module

//Experimenting with FileSystem Module--------------
const userInput = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

program();

function program() {

    const optionText = `* Enter 1 to read fileToRead.txt\n* Enter 2 to rename fileToRename.txt to renamed.txt\n* Enter 3 to create a file\n* Enter anything else to quit\n`;

    userInput.question(optionText, input => {

        sanitizeFileName();

        if (input === '1') { readAndDisplayFile('fileToRead.txt'); }

        else if (input === '2') { displayDirAndRename(); displayDirAfterRename(); }

        else if (input === '3') { 

            let fileContent, filename;
            userInput.question('\nWhat should the file name be?: ', input => { 
                
                filename = input + '.txt'; 

                userInput.question('\nWhat should the file say?: ', input =>  { 
                
                    fileContent = input; 

                    fs.writeFileSync(filename, fileContent);

                    console.log('Created your file and wrote your content to it.\n');
                    console.log(`\n\n-------- Reading ./${filename} ----------\n`);

                    console.log(fs.readFileSync(filename, 'utf8'));

                    console.log('\n------------------------------------------');

                    userInput.question('\nDelete File [y/n]?: ', input =>  {

                        if (input[0].toLowerCase() === 'y') {

                            console.log('\ndeleting ' + filename);

                            fs.unlinkSync('./' + filename);

                            console.log('\nSUCESSFULLY DELETED ' + filename + '\n');

                        }

                        else if (input[0].toLowerCase() === 'n') {

                            console.log('\nNOT deleting ' + filename + '\n');

                        }

                        program();

                    });

                });

            });

        }

        else { process.exit(); }

        program();
        
    });

}

function loopThroughDir(callback) {

    const dirFiles = fs.readdirSync('.');

    for (file of dirFiles) {

        callback(file);

    }

}

function santitizeCallback(file) {

    if (file === 'renamed.txt') {

        fs.renameSync(file, 'fileToRename.txt', function (err) {

            if (err) {

                console.log('Sorry, had an issue!');

                process.exit();

            }

        });

    }

}

function sanitizeFileName() { loopThroughDir(santitizeCallback); }

function readAndDisplayFile(filename) {

    console.log(`\n\n-------- Reading ./${filename} --------\n`);

    console.log(fs.readFileSync('fileToRead.txt', 'utf8'));

    console.log('------------------------------------------');

}

function displayDirAndRename() {

    console.log('\n------------------------------------------');
    console.log('Files in this Directory Before Change-----');

    loopThroughDir(displayDirAndRenameCallback);

}

function displayDirAndRenameCallback(file) {

    if (file === 'fileToRename.txt') { 
        
        console.log(`*${file}*`);
        
        fs.renameSync(file, 'renamed.txt', function (err) {

            if (err) {

                console.log('Sorry, had an issue!');

                process.exit();

            }

        });
    
    }

    else { console.log(` ${file} `); }

}

function displayDirAfterRename() {

    console.log('Files in this Directory After Change-----');

    loopThroughDir(displayDirAfterRenameCallback);

    console.log('------------------------------------------');

}

function displayDirAfterRenameCallback(file) {

    console.log(file === 'renamed.txt' ? `*${file}*` : ` ${file} `);

}