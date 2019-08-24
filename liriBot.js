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
        limit: 5
    }).then(function (response) {
        // console.log('line 54 --> ' + JSON.stringify(response));

        // variable songs is getting the value contained in the object retrieved from the api accessed via dot notation
        var songs = response.tracks.items;

        // for loop to go trhough the number of songs retrieved 
        for (var i = 0; i < songs.length; i++) {

            // for loop to match the artists to the songs found
            for (var j = 0; j < songs[i].artists.length; j++) {
                // console.log('What does j have--> '[j]);
                console.log('Performer --> ' + songs[i].artists[j].name);
                // console logging the value of i at each iteration for each value of the object 
                // console.log('line 61 song ' + songs[i].artists[j].name);
            };
            console.log('The song is --> ' + songs[i].name);
            console.log('Preview song --> ' + songs[i].preview_url);
            console.log('The album is --> ' + songs[i].album.name);
            console.log('==========================');
        };
    });
};

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

// searching for movie
// variable declared gets the value of the function being defined and its parameter

// var findMovie = function (movieName) {
//     if (!movieName) {
//         movieName = 'As good as it gets';
//     };
//     var ombdUrl = 'http://www.omdbapi.com/?i=' + movieName + 'tt3896198&apikey=68c2d4d3';

// };

// var omdb = new (require('http://www.omdbapi.com/?i=tt3896198&apikey=68c2d4d3'));

var findMovie = function (movieName) {
    var ombdUrl = 'http://www.omdbapi.com/?i=' + movieName + 'tt3896198&apikey=68c2d4d3';
    console.log('line 110 movie --> ' + movieName);
    console.log('line 111 url --> ' + ombdUrl);
    axios.get(ombdUrl).then(
        function (result) {
            var jsonMovie = result.data;
            if (!jsonMovie.length) {
                console.log('Nothing was found under --> ' + movieName);
                for (var k = 0; k < json.Data.length; i++) {
                    var show = jasonMovie[k];

                    console.log('line 120 movie -->' + movieName);
                };
            }
        }
    )
};

//     if (!movieName) {
//         console.log('line 126 ombd is --> ' + omdb);
//         console.log('line 127 movie is --> ' + movieName);
//         movieName = 'Life as a house';
//     }
//     omdb.search({
//         search: movieName,  // required
//         // Title: title,             // optionnal  ['series', 'episode', 'movie']
//         // year: year,               // optionnal
//         // page: page                   // optionnal (1 to 100)
//     }).then(res => {
//         console.log('got response:', res);
//     }).catch(console.error);
//     omdb.get({
//         Title: title,   // optionnal (requires imdbid or title)
//         Year: year,                // optionnal
//         // imbd rating
//         tomatoes: true,             // optionnal (get rotten tomatoes ratings)
//         // country of origin
//         // language
//         Plot: 'short',               // optionnal (defaults to 'short')
//         Actors: actors             
//     }).then(res => {
//         console.log('got response:', res);
//     }).catch(console.error);
// };



var firstInput = process.argv[2];
var secondInput = process.argv[3];
var whichFunction = function (firstInput, secondInput) {
    if (firstInput === 'spotify-this-song') {
        getmeSpotify(secondInput);
    } else if
        (firstInput === 'concert-this') {
        getMeConcert(secondInput);
    } else if (firstInput === 'movie-this') {
        findMovie(secondInput);
    } else {
        doWhatItSays();
    }
};
whichFunction(firstInput, secondInput);
    console.log('log at bottom input to search--> ' + secondInput);
