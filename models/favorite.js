const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
    user: {
        firstname: String,
        lastname: String
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
});

const Favorite = mongoose.modelNames('Favorite', favoriteSchema);

module.exports = Favorite;


// TODO: Create the Favorite model using Mongoose