require('dotenv').config();
const server = require("./src/App")
const PORT = process.env.PORT
const {sequelize} = require ("./src/DB_connection")

sequelize.sync({ force: true }).then(() => {
    
})

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});
