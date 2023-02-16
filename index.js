require('dotenv').config();
const server = require("./src/App");
const getFalseApiToDB = require('./src/controllers/saveCoursesDB');
const getFalseApiToDBUsers = require("./src/controllers/saveUsersDB")
const PORT = process.env.PORT
const {sequelize} = require ("./src/DB_connection")

sequelize.sync({ force: true }).then(async () => {
    await getFalseApiToDBUsers();
    await getFalseApiToDB();
})


server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});
