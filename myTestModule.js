exports.getCurrentTime = () => {

    const moment = require('moment-timezone');

    return moment.tz(moment.tz.guess()).format('LLLL');

} 

exports.getFactorialSum = n => {

    let x = n - 1;

    while (x > 0) {

        n += x;

        x--;

    }

    console.log(`\nYour answer is ${n}\n\n`);

}