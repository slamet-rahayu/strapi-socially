'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    const io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
      }
    });
    io.on("connection", (socket) => {
      console.log(`${socket.id} connected`);
      socket.on("join", ({ username }) => {
        console.log("user Connected", username);
      });
      socket.on("hello", (name) => {
        console.log(`hello ${name}`);
        socket.emit("hello", "well hello")
      })
    });
  },
};
