const moment = require('moment-timezone');


exports.getCurrentTime = () => { 

    const guessedTimezone = moment.tz.guess(); 

    return `${moment.tz(guessedTimezone).format('LLLL')} ${guessedTimezone.replace('_', ' ')}`;

} 

exports.getFactorialSum = n => {

    let x = n - 1;

    while (x > 0) {

        n += x;

        x--;

    }

    console.log(`\nYour answer is ${n}\n\n`);

}

