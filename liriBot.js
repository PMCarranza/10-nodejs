'use strict';

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. (from https://www.npmjs.com/package/dotenv). 
// zero-dependancy means the module doesn't depend on any other packages to function
// npm install dotenv was run in the terminal (dotenv folder showed up)
// the require function imports modules that exist in separate files.
require('dotenv').config();

// importing the node-spotify-api
var spotify = require('node-spotify-api');

// importing the api keys
var keys = require('./keys');

// importing axios npm package
// axios is a promise based http (like ajax) for the browser and node.js
// npm install axios was run in the terminal (created {}package-lock.json)
var axios = require('axios');

// npm i moment was run to install moment.js
var moment = require('moment');

// The Node.js file system module allows you to work with the file system on your computer (w3 schools).
var fs = require('fs');

// initializing the spotyfy api client using my id and secret

var spotify = new spotify(keys.spotify);

// function to get performer
var getArtistNames = function (artist) {
    return artist.name;
};

// searching for music
var getmeSpotify = function (songName) {
    if (songName === undefined); {
        songName = 'defiying gravity';
    }

    spotify.search({
        type: 'track',
        query: songName
    },
        function (err, data) {
            if (error) {
                console.log('did not work --> ' + err);
                return;
            }
            var songs = data.tracks.item;
    
            for (var i = 0; i < songName.length; i++) {
                console.log(i);
                console.log('performer --> ' + songs[i].artist.map(getArtistNames));
                console.log('the song is --> ' + songs[i].name);
                console.log('preview song --> ' + songs[i].preview_url);
                console.log('the album is --> ' + songs[i].album);
            };

        });  
}

// searching for bands
var findBand = function (artist) {
    var queryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=';

    axios.get(queryURL).then(
        function (response) {

            var jsonData = response.data;

            if (!jasonData.length) {
                console.log('No results found for --> ' + artist);

                for (var i = 0; i < json.Data.length; i++) {
                    var show = jasonData[i];
                
                    console.log(show.venue.city + ',' + (show.venue.region || show.venue.country) + ' at ' + show.venue.name + ' ' + moment(show.date.time).format('MM/DD/YYYY'));
                };
            };
        }
    );
};

// searching for movies
var findMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = 'As good as it gets';
    }
}

var urlHit = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=full%tomatoes=true&apikey=trilogy';