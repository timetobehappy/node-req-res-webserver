//const yargs = require('yargs');
const axios = require('axios');
const hbs = require('hbs');


const fs = require("fs");

// const argv = yargs
//     .options({
//         u: {
//             demand: true,
//             alias: 'address',
//             describe: 'URL to consider',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;




var getResponse = (reqUrl) => {

    return new Promise((resolve, reject) => {
        var requestOptions = {
            url: reqUrl,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        //var reqUrl = "http://www.sears.com";

        //setTimeout(() => {
        //console.log("url is ", url);

        //var responseHeaders;
        axios.head(reqUrl).then((response) => {

            //console.log(response);
            // fs.appendFile('server.log', JSON.stringify(response,undefined, 2), (err) => {
            //     if (err) {
            //         console.log('Unable to append to server.log.')
            //     }
            // })
            resolve(response);
            // hbs.registerHelper('getResponseHeaders', ()=> {
            //   return responseHeaders;
            // })
        }).catch((e) => {
            console.log(e);
            reject("Unable to get the headers...")
                //return e;
        });

    });


    //}, 5000);
    //console.log(responseHeaders);
    // JSON.stringify(responseHeaders);



}

// var getResponse = () => {
//   var reqUrl = "http://www.google.com";
//
//
//   var responseHeaders = axios.get(reqUrl).then((response) => {
//       //console.log(JSON.stringify(response.headers));
//       //console.log(typeof JSON.stringify(response.headers))
//       return (JSON.stringify(response.headers));
//   }).catch((e) => {
//       console.log(e);
//   });
//
// console.log(responseHeaders);
// return responseHeaders;
//
// }


module.exports = {
    getResponse
}
