var mosca = require('mosca')
var settings = {
    port: 1883
};
//here we start mosca
var server = new mosca.Server(settings);
server.on('ready', setup);
// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running')
}

server.on('clientConnected', function (client) {
    console.log('client connected');
});

server.on('published', function (packet, client) {
    console.log('Published : ', packet.payload);
    console.log(packet);
    var message = {
        topic: 'asd',
        payload: 'presence', // or a Buffer
        qos: 0, // 0, 1, or 2
        retain: false // or true
    };

    server.publish(message, function() {
        console.log('done!');
    });
});

server.on('subscribed', function (topic, client) {
    console.log('subscribed : ', topic);
});

server.on('unsubscribed', function (topic, client) {
    console.log('unsubscribed : ', topic);
});

server.on('clientDisconnecting', function (client) {
    console.log('clientDisconnecting : ', client.id);
});

server.on('clientDisconnected', function (client) {
    console.log('clientDisconnected : ', client.id);
});