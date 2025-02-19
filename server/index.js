import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your React app URL
    methods: ["GET", "POST"],
  },
});

// Add a basic route for the root path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("send_message", (message) => {
    // Broadcast the message to all connected clients
    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => {
  console.log("WebSocket server running on port 3000");
});
