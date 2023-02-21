require('dotenv').config();
const server = require("./src/App");
const { postFalseCourses } = require('./src/controllers/postCategory');
const getFalseApiToDB = require('./src/controllers/saveCoursesDB');
const saveReviewsDB = require('./src/controllers/saveReviewsDB');
const getFalseApiToDBUsers = require("./src/controllers/saveUsersDB")
const PORT = process.env.PORT
const {sequelize} = require ("./src/DB_connection")

sequelize.sync({ force: true }).then(async () => {
    await getFalseApiToDBUsers();
    await postFalseCourses();
    await getFalseApiToDB();
    await saveReviewsDB()
    
})


server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});
