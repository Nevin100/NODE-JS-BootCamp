import EventEmitter from "events";

const customEmitter = new EventEmitter();

//1.on: listen/register for an event.
//2.once: listen/register for an event ut fire once only!!
//3.emit: emit/call an event
customEmitter.on("Response", (name, id) => {
  console.log(`user:${name} id:${id}`);
});

customEmitter.emit("Response", "Nevin", 20);
customEmitter.emit("Response", "Nevin 100", 30);
customEmitter.emit("Response", "Nevin 200", 40);

console.log(EventEmitter);
