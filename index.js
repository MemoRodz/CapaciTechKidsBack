require('dotenv').config();
const server = require("./src/App");
const getFalseApiToDB = require('./src/controllers/getFalseApiToDB');
const getFalseApiToDBUsers = require("./src/controllers/getFalseApitoDBUsers")
const PORT = process.env.PORT
const {sequelize} = require ("./src/DB_connection")

sequelize.sync({ force: true }).then(() => {
    getFalseApiToDBUsers()
    getFalseApiToDB()
})

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});
