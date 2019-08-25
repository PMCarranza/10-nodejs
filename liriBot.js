// 'use strict';

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. (from https://www.npmjs.com/package/dotenv). 
// zero-dependancy means the module doesn't depend on any other packages to function
// npm install dotenv was run in the terminal (dotenv folder showed up)
// the require function imports modules that exist in separate files.
require('dotenv').config();

// Load the fs package to read and write
var fs = require("fs");

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

const omdb = new (require('omdbapi'))('68c2d4d3');
var firstInput = process.argv[2];
var secondInput = process.argv[3];

// defining place holder variables to be passed values in lines 147 and 148
var doThis;
var doThisToo;

var findMovie = function (movieName) {
    if (!movieName) {
        console.log('ombd is --> ' + omdb);
        console.log('movie is --> ' + movieName);
        movieName = 'Life as a house';
    }
    omdb.search({
        search: secondInput  // required
        // type: 'series',             // optionnal  ['series', 'episode', 'movie']
        // year: '2010'          // optionnal
        // page: '1' 
    }).then(res => {
        console.log(res);
        console.log('Title: ' + res[1].title);
        console.log('Release year: ' + res[2].year);
    }).catch(console.error);
    // omdb.get({
    //     id: 'tt0944947',            // optionnal (requires imdbid or title)
    //     title: 'Game of Thrones',   // optionnal (requires imdbid or title)              // optionnal
    //     type: 'series',             // optionnal ['series', 'episode', 'movie']
    //     plot: 'full',               // optionnal (defaults to 'short')
    //     tomatoes: true,             // optionnal (get rotten tomatoes ratings)
    //     year: '2011'   
    // }).then(res => {
    //     console.log('got response:', res);
    // }).catch(console.error);
};

// searching for bands
var findBand = function (artist) {
    var queryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';

    // if (!artist) {
    //     artist = 'the beach boys';
    //     // console.log('artist is --> ' + artist);
    // }
    
    console.log('hora --> ' + moment().format('h:mm:ss a'));
    console.log('artist ' + artist);
    axios.get(queryURL).then(
        function (response) {
            // console.log('vvvvv  THIS IS RESPONES  vvvvv');
            // console.log(response);
            // console.log('^^^^^^^^^  THIS WAS RESPONSE  ^^^^^^^^^^^^');
         
            // console.log(response);
            var performer = response.data;
            // console.log('vvvvvvvvv  this is response.data vvvvvvvvvv');
            // console.log(performer);
            // console.log('^^^^^^^^^^^this was response.data^^^^^^^^^ ');

            // console.log('firstInput has --> ' + firstInput);
            // console.log('secondInput has --> ' + secondInput);
            // if (!performer.length) {
                for (var i = 0; i < performer.length; i++) {
                    var show = performer[i];
                    // console.log('Show  vvvvvvv');
                    // console.log(show);
                    // console.log('Show ^^^^^^^^^^^^');
                    console.log('========== INFORMATION I AM LOOKIING FOR =================');
                    console.log('Performer: ' + show.lineup[0]);
                    console.log('Venue: ' + show.venue.name);
                    console.log('City: ' + show.venue.city + ', ' + show.venue.region);
                    console.log('Date & Time of Show: ' + moment(show.datetime).format('MM/DD/YYYY hh:00 A'));
                    console.log('=========================================================');
                    console.log('');
                };
            // };
        }
    );
};

var doWhatItSays = function () {
    // accessing the random.txt file using the fs.readfile method
    // function with error and data parameters is part of the fs.read file method
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // dataArr gets what random.txt has and uses the .split() method to separate the objects in the new array
        var dataArr = data.split(",");
        console.log('data contains this on line 139 --> ' + data);

        // after split() doThis gets 'spotify-this-song' and and dothisToo gets 'God I hate Shakespeare'
        console.log('dataArr at 0 has --> ' + dataArr[0]);
        console.log('dataArr at 1 has --> ' + dataArr[1]);
        doThis = dataArr[0];
        doThisToo = dataArr[1];

        // run the function with its parameters
        whichFunction(doThis, doThisToo);
    });
};


var whichFunction = function (firstInput, secondInput) {
    if (firstInput === 'spotify-this-song') {
        getmeSpotify(secondInput);
    } else if
        (firstInput === 'concert-this') {
        findBand(secondInput);
    } else if (firstInput === 'movie-this') {
        findMovie(secondInput);
    } else if
        (firstInput === 'do-what-it-says') {
        doWhatItSays();
    }
};
whichFunction(firstInput, secondInput);