const server = require("./src/App")
const PORT = process.env.PORT
const {sequelize} = require ("./DB_connection.js")

sequelize.sync({ force: true }).then(() => {
    
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
