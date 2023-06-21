const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
    title:{
        type: String,
        unique: true,
        require:true,
    },
    actor:{
        type: String,      
    },
});


const FilmModel = mongoose.model('Movies', filmSchema)

module.exports = FilmModel;