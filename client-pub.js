/**
 * Created by mr_shadow on 18.08.16.
 */
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
    client.publish('presence', 'Hello on' + new Date(), {retain: false, qa: 1});
    client.publish('general/test/predator', 'Hello on' + new Date(), {retain: false, qa: 1});
    client.publish('general/phone/cutes', 'Hello on' + new Date(), {retain: false, qa: 1});
    client.publish('general/sms/predator', 'Hello on' + new Date(), {retain: false, qa: 1});
    client.end();
});