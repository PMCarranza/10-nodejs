// 'use strict';

console.log('keys is loaded');

exports.spotify = {

    // The process.env property returns an object containing the user environment
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

// exports.bandsintown = {
//     id: process.env.BANDSINTOWN_ID
// };

// exports.omdb = {
//     id: process.env.OMDB_ID
// };