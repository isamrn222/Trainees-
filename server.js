const express = require('express');
const mongoose = require("mongoose");
// const {dbConnection}= require('./src/DB/config')
const cors= require('cors');
const bodyparser= require('body-parser');
require('dotenv').config();//cargar variables de entorno
const app = express();
const PORT = process.env.PORT || 3008;


app.use(cors());
// dbConnection();
app.use(bodyparser.json());
app.use(express.json());


// app.use("/institutes",instituteRouter);

app.get('/', (req, res) => {
  res.send('API Gateway');
});

// mongodb connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error(error));

const instituteRouter= require('./src/institutes/instituteRoute');
app.use('/institutes',instituteRouter);


const responsabilityRouter= require('./src/responsabilitie/responsabilitieRoute');
app.use('/responsabilities',responsabilityRouter);


const responsabilitiestraineeRouter= require('./src/responsabilitiestrainee/responsabilitiestraineeRoute');
app.use('/responsabilitiestrainees',responsabilitiestraineeRouter);


const traineeRouter= require('./src/trainee/traineeRoute');
app.use('/trainees',traineeRouter);



// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));


app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});
