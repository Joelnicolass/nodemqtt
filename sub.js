const mqtt = require("mqtt");

const sub = mqtt.connect("mqtt://localhost:9000");

sub.on("connect", () => {
  sub.subscribe("esp32/temperature");
});

sub.on("message", (topic, message) => {
  console.table(JSON.parse(message));
});
