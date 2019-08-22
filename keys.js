'use strict';

exports.spotify = {

    // The process.env property returns an object containing the user environment
    id: process.env.DB_USER,
    secret: process.env.DB_PASS
};
console.log('line 6 --> ', process.env);

exports.bandsintown = {
    id: process.env.BANDSINTOWN_ID
}

exports.omdb = {
    id: process.env.OMDB_ID
}

// exports.mapquest = {
//     id: process.env.MAPQUEST_ID
// }