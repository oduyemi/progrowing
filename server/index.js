const { Server } = require("socket.io");

io = new Server(7000, {
    cors: true,
});

io.on("connection", socket => {
    console.log(`Socket Connected`, socket.id);
});