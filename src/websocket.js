const soketio = require("socket.io");
let io;
exports.setupWebsocket = (server) => {
    io = soketio(server);

    io.on("connection", socket => {
        console.log("conect")
    });
}

