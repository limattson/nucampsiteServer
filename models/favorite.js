const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
});

const Favorite = mongoose.modelNames('Favorite', favoriteSchema);

module.exports = Favorite;


// TODO: Create the Favorite model using Mongoose