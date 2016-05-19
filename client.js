var mqtt = require('mqtt')
client = mqtt.createClient(1883, 'localhost');
client.subscribe('presence');
console.log('Client publishing.. ');
client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());


client.on("message", function(topic, payload) {
    console.log([topic, payload].join(": "));
    //client.end();
});

//client.end();