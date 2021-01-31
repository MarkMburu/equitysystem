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

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true, useFindAndModify: false })

const db = mongoose.connection

db.once('open',()=>{
    console.log("mongodb conncetion established successfully")
})
db.on('error',(err)=>{
   console.log(err)
});


const projectRouter = require("./Routes/projects");
const unitRouter = require("./Routes/units");
const labourRouter = require("./Routes/labour");
const authRouter = require("./Routes/auth");
const updateRouter = require("./Routes/updateRoute");
const deleteRouter = require("./Routes/deleteRoute");
const getRouter = require("./Routes/getRoutes");
app.use("/api",authRouter);
app.use('/project',projectRouter);
app.use("/update",updateRouter);
app.use("/delete",deleteRouter);
app.use("/get",getRouter);
app.use("/unit",unitRouter)
app.use("/labour",labourRouter)
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`)
})