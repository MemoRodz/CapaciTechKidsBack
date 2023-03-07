require('dotenv').config();
const { server, express } = require("./src/App");
const { postFalseCourses } = require('./src/controllers/postCategory');
const relaciones = require('./src/controllers/Relaciones');
const getFalseApiToDB = require('./src/controllers/saveCoursesDB');
const saveLectures = require('./src/controllers/saveLectures');
const saveReviewsDB = require('./src/controllers/saveReviewsDB');
const getFalseApiToDBUsers = require("./src/controllers/saveUsersDB")
const PORT = process.env.PORT
const { sequelize } = require("./src/DB_connection")

sequelize.sync({ force: false }).then(async () => {
  //await getFalseApiToDBUsers();
  //await postFalseCourses();
  //await getFalseApiToDB();
  //await relaciones();
  //await saveReviewsDB()
  //await saveLectures()
})


// This is your test secret API key.
const stripe = require("stripe")('sk_test_51Me5d3JNDCh84PbtvZ83ZOhWUp7VPBN5S9h7qjHx69WgOmD9MxuTwJEGFZFcus50GSbsra7wWGTM4j6uhzeouMno00lto4jS1l');

server.use(express.static("public"));
server.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400
};

server.post("/create-payment-intent", async (req, res) => {
  const { items, FABI } = req.body;
  //console.log(FABI);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(FABI),
    // amount: calculateOrderAmount(items),
    currency: "mxn",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});
