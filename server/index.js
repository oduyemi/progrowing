const { Server } = require("socket.io");

io = new Server(7000);

io.on("connection", socket => {
    console.log(`Socket Connected`, socket.id);
});