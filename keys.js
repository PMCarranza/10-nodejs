'use strict';

exports.spotify = {

    // The process.env property returns an object containing the user environment
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
console.log('line 6 --> ', process.env);