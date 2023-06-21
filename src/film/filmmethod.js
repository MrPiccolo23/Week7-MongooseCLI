const mongoose = require('mongoose');
const FilmModel = require('./filmmodel');

exports.addFilm = async (newFilm) => {
    try {
        const movie = new FilmModel(newFilm); 
        await movie.save(); 
        mongoose.disconnect();
        console.log("Film added to database");
    } catch (error) {
        console.log(error);
    }
};

exports.findFilms = async (newFilm) => {
    try {
        const list = await FilmModel.find({ newFilm });
        console.log("Found films =>", list);
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

exports.findActor = async (newFilm) => {
    try {
        const actorList = await FilmModel.find({ actor: newFilm.actor });
        console.log("Found actor's films =>", actorList);
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

exports.updateActor = async (newFilm) => {
    try {
        await FilmModel.findOneAndUpdate(
        { title: newFilm.title },
        { actor: newFilm.actor }
        );
        console.log(`Actor updated for ${newFilm.title}`);
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

exports.deleteFilm = async (newFilm) => {
    try {
        await FilmModel.deleteOne({ title: newFilm.title });
        console.log(`${newFilm.title} deleted from database.`);
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};
