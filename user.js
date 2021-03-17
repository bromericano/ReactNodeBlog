const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/Blog';

module.exports = {
    signup: function(name, email, password) {
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
            const db = client.db('Blog');
            db.collection('user').insertOne( {
                "name": name,
                "email": email,
                "password": password
            }, function(err, result) {
                assert.equal(err, null);
                console.log("Saved the user sign up details.");
            });
        });
    },
    validateSignIn: function(username, password, callback) {
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
            const db = client.db('Blog');
            db.collection('user').findOne( { email : username, password: password},
                function(err, result) {
                    if(result==null) {
                        callback(false)
                    } else {
                        callback(true)
                    }
                });
        });
    }
}