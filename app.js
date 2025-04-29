var express = require('express');
var admin = require('firebase-admin');
const path = require('path');

var app = express();
app.use(express.json())

var serviceAccountJson = require('./your-application-firebase-adminsdk.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountJson),
  databaseURL: "https://your-application.firebaseio.com"
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/notification', function(req, res) {
    console.log(req.body)
    
    admin.messaging().send(req.body)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        res.send('Message sent\n');
    })
    .catch((error) => {
        console.log('Error sending message:', error);
        res.send('Error\n');
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000!')
});