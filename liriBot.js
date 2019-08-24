// 'use strict';

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. (from https://www.npmjs.com/package/dotenv). 
// zero-dependancy means the module doesn't depend on any other packages to function
// npm install dotenv was run in the terminal (dotenv folder showed up)
// the require function imports modules that exist in separate files.
require('dotenv').config();

// importing the node-spotify-api
// This is a universal wrapper/client for the Spotify Web API that runs on Node.JS and the browser
var Spotify = require('node-spotify-api');

// importing the api keys
var keys = require('./keys');

// importing axios npm package
// axios is a promise based http (like ajax) for the browser and node.js
// npm install axios was run in the terminal (created {}package-lock.json)
var axios = require('axios');

// npm i moment was run to install moment.js
// with moment.js installed we access time/date data for our purposes
var moment = require('moment');


// The Node.js file system module allows you to work with the file system on your computer (w3 schools).
// common uses of the require() method: create, read, delete, update, rename files
var fs = require('fs');

// initializing the spotyfy api client using my id and secret
// var spotify gets the value of new Spotify which in turn contains the secret key and the already assign value to spotify 
var spotify = new Spotify(keys.spotify);

// function to get performer
// varibale declared gets the value of the funciton being defined and its parameter
// var getArtistNames = function (artist) {
//     return artist.name;
// };
// searching for music
// variable declared gets the value of the function being defined and its parameter
var getmeSpotify = function (songName) {
    // if song requested can not be found pass the hard coded song to songName variable
    if (!songName) {
        songName = 'defiying gravity';
    }
    // using the variable spotify with its value of keys and api library for spotify we run a search for track and song name limiting the results to 10
    spotify.search({
        type: 'track',
        query: songName,
        // limit:10
    }).then(function (response) {
        // console.log('line 54 --> ' + JSON.stringify(response));
        var songs = response.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            for (var j = 0; j < songs[i].artists.length; j++) {
                // console logging the value of i at each iteration for each value of the object 
                console.log('line 61 song ' + songs[i].artists[j].name);
            };
            // console.log('performer --> ' + songs[i].artist.map(getArtistNames));
            console.log('the song is --> ' + songs[i].name);
            console.log('preview song --> ' + songs[i].preview_url);
            console.log('the album is --> ' + songs[i].album.name);
            console.log('==========================');
        };
    });  
}

// getmeSpotify(process.argv[3]);
        
      // .catch(function(err) {
      //   console.log(err);
      // });
        
        
        // function (err, data) {
        //     // function to catch an error
        //     if (err) {
        //         // if error the return statement will stop the execution of the function and return the value of err.
        //         return console.log('did not work --> ' + err);
        //     }
        //     console.log('this is what data has--> ' + data);
        //     // variable songs gets the values of data, tracks and item
        //     var songs = data.tracks.item;

        // // for loop will go through the lenght of parameter songName and it will increase by one each time until it reaches 10
        //     for (var i = 0; i < songName.length; i++) {
        //         // console logging the value of i at each iteration for each value of the object 
        //         console.log(i);
        //         console.log('performer --> ' + songs[i].artist.map(getArtistNames));
        //         console.log('the song is --> ' + songs[i].name);
        //         console.log('preview song --> ' + songs[i].preview_url);
        //         console.log('the album is --> ' + songs[i].album);
        //     };
        // });  
//}

// // searching for bands
// var findBand = function (artist) {
//     var queryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=';

//     axios.get(queryURL).then(
//         function (response) {

//             var jsonData = response.data;

//             if (!jasonData.length) {
//                 console.log('No results found for --> ' + artist);

//                 for (var i = 0; i < json.Data.length; i++) {
//                     var show = jasonData[i];
                
//                     console.log('Place and city -->' + show.venue.city);
//                     console.log('region or country--> ' + (show.venue.region || show.venue.country));
//                     console.log('venue name--> ' + show.venue.name);
//                     console.log('time of show--> ' + moment(show.date.time).format('MM/DD/YYY'));
//                 };
//             };
//         }
//     );
// };

// // searching for movies
// var findMovie = function (movieName) {
//     if (movieName === undefined) {
//         movieName = 'As good as it gets';
//     }
// }

// var urlHit = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=full%tomatoes=true&apikey=trilogy';

// var pick = (function (caseData, functionData) {
//     switch (caseData) {
// //         // case 'concert-this':
// //         //     getMyBands(functionData);
// //         //     break;
//         case 'spotify-this-song':
//             getmeSpotify(functionData);
//             break;
// //         // case 'movie-this':
// //         //     getMeMovie(functionData);
// //         //     break;
// //         // case 'do-what-it-says':
// //         //     doWhatItSays();
// //         //     break;
// //         default:
// //             console.log('LIRI does not know that');
//     }
// });

var firstInput = process.argv[2];
var secondInput = process.argv[3];
var whichFunction = function (firstInput, secondInput) {
    if (firstInput === 'spotify-this-song') {
        getmeSpotify(secondInput);
    } else if
        (firstInput === 'concert-this') {
        getMeConcert(secondInput);
    } else if (firstInput === 'movie-this') {
        getMeMovie(secondInput);
    } else {
        doWhatItSays();
    }
};
whichFunction(firstInput, secondInput);