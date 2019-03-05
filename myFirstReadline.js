const readline = require('readline');              //Readline Module (Gets command line input)
const myCustomModule = require('./myTestModule');  //Created my own module.

//Experimenting with Readline Module--------------

const userInput = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

const giveUserFactorialSum = () => {

    userInput.question('\nEnter a number to get the factorial sum. You can also enter -1 to quit. ', userInput => {

        if (userInput == '-1') {

            console.log('\nBye!\n');

            process.exit();

        }

        else {

            myCustomModule.getFactorialSum(Number(userInput));

            giveUserFactorialSum();

        }
    
    }); 

}

giveUserFactorialSum();








