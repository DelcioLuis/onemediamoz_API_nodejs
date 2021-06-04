const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http");
const bodyParser =require("body-parser");

const routes = require("./routes");
const {setupWebsocket} = require("./websocket");

const {acess} = require("./database/Mongo")

const app = express();

mongoose.connect(acess, {useNewUrlParser:true, useUnifiedTopology:true})

const server = http.Server(app);

setupWebsocket(server);

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/files", express.static(path.resolve(__dirname,"uploads")))
app.use(routes);

server.listen(process.env.PORT || 3333 );
