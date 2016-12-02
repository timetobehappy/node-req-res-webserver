//const yargs = require('yargs');
const axios = require('axios');
const hbs = require('hbs');

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


var getResponse = (callback) => {
    var reqUrl = "http://www.sears.com";

    //setTimeout(() => {


    //var responseHeaders;
    axios.head(reqUrl).then((response) => {

        var responseHeaders = JSON.stringify(response.headers, undefined, 2);
        callback(responseHeaders);
        // hbs.registerHelper('getResponseHeaders', ()=> {
        //   return responseHeaders;
        // })
    }).catch((e) => {
        console.log(e);
        callback("Unable to get the headers...")
        //return e;
    });

    //}, 5000);
    //console.log(responseHeaders);
    return; // JSON.stringify(responseHeaders);



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
