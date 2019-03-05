const fs = require('fs');               //FileSystem Module
const readline = require('readline');   //Readline Module


const userInput = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

//Experimenting with FileSystem Module--------------


var dirFiles = fs.readdirSync('.');
for (file of dirFiles) {

    if (file === 'renamed.txt') {

        fs.renameSync(file, 'fileToRename.txt', function (err) {

            if (err) {

                console.log('Sorry, had an issue!');

                process.exit();

            }

        });

    }

}


const optionText = `* Enter 1 to read fileToRead.txt\n* Enter 2 to rename fileToRename.txt to renamed.txt\n* Enter 3 to create a file\n`;

userInput.question(optionText, input => {

    if (input === '1') {

        fs.readFile('fileToRead.txt', 'utf8', (err, contents) => {

            console.log('\n\n-------- Reading ./fileToRead.txt --------\n\n');
            
            console.log(contents);
        
            console.log('------------------------------------------');
        
        });

    }

    else if (input === '2') {

        console.log('\n------------------------------------------');

        console.log('Files in this Directory Before Change-----');
        dirFiles = fs.readdirSync('.');
        for (file of dirFiles) {

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

        console.log('Files in this Directory After Change-----');
        dirFiles = fs.readdirSync('.');
        for (file of dirFiles) {

            console.log(file === 'renamed.txt' ? `*${file}*` : ` ${file} `);

        }

        console.log('------------------------------------------');

    }

    else if (userInput === '3') {


    }

});

