const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const {errorHandler,notFound} = require("./middleware/middleware");

require("dotenv").config();

const app = express();
const port = process.env.PORT ||  4000;

// middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({

}));
app.use(express.json());


const uri = process.env.MONGO_URI

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})

const db = mongoose.connection

db.once('open',()=>{
    console.log("mongodb conncetion established successfully")
})
db.on('error',(err)=>{
   console.log(err)
});


const projectRouter = require("./Routes/projects")
const unitRouter = require("./Routes/units")
const labourRouter = require("./Routes/labour")
app.use('/project',projectRouter);
app.use("/unit",unitRouter)
app.use("/labour",labourRouter)
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`)
})