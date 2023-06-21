HOW TO USE

Connect to a MongoDB cloud online database. Create and Store MONGO_URI of the database in a .env file.
https://www.mongodb.com/

MONGOOSECLI CRUD 
//CREATE (adds film to database) : node src/app.js "add film" --title "spiderman: no way home" --actor "tom holland"
//READ (lists all films in database) : node src/app.js "find films"
//READ (find indivudual film by actor): node src/app.js "find actor films" --actor "zendaya"
//UPDATE (looks for title and updates actor): node src/app.js "update actor films" --title "spiderman: no way home" --actor "zendaya"
//DELETE (deletes film from database): node src/app.js "delete film" --title "spiderman: no way home"
