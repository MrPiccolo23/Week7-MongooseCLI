require("./db/connection");
const yargs = require('yargs/yargs');
const {hideBin}= require('yargs/helpers');
const {addFilm, findFilms, findActor, updateActor, deleteFilm} = require("./film/filmmethod");
const argv = yargs(hideBin(process.argv)).argv;

const app = () => {
    let filmYargs = { title: argv.title, actor: argv.actor };
    if (process.argv[2] == "add film") {
        addFilm(filmYargs);
    } else if (process.argv[2] == "find films") {
        findFilms(filmYargs);
    } else if (process.argv[2] == "find actor films") {
        findActor(filmYargs);
    } else if (process.argv[2] == "update actor films") {
        updateActor(filmYargs);
    } else if (process.argv[2] == "delete film") {
        deleteFilm(filmYargs);
    } else {
        console.log("Wrong command")
    }
};


app();