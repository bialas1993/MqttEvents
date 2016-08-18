/**
 * Created by mr_shadow on 18.08.16.
 */
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
    client.subscribe('presence');
    client.subscribe('general/+/predator');

    client.on('message', function (topic, message) {
        console.log(topic);
        console.log(message.toString());
        console.log('---------');
    });
});