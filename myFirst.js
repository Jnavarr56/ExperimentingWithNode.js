//Experimenting with Node.js
//==========================

/*
    So Far: 
     - You used NPM to install axios and are doing a simple get request to get the reddit homepage data as JSON.
*/

const axios = require('axios');

axios.get('https://www.reddit.com/.json').then(response => {

    response.data.data.children.forEach(l => {

        console.log(

            {
                title: l.data.title, 
                subreddit: `r/${l.data.subreddit}`, 
                link: `reddit.com${l.data.permalink}`
            }

        );

    });

});

//Continue with the W3Schools Node.js Tutorial https://www.w3schools.com/nodejs/nodejs_modules.asp



    

