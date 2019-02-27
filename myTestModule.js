exports.getCurrentTime = () => {

    const moment = require('moment-timezone');

    return moment.tz(moment.tz.guess()).format('LLLL');

} 