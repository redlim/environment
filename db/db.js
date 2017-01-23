const MongoClient = require('mongodb').MongoClient;

// Connection URL
const mongo = 'mongodb://localhost:27017/environment';

const mongoDB = {};
var db ;
mongoDB.connection = function (url) {
    var connectionUrl = url || mongo;
    return new Promise(function(resolve,reject){
        MongoClient.connect(connectionUrl, function(err, connection) {
            if(!err){
                resolve(connection);
            }else{
                reject(err);
            }
        });
    });

};

mongoDB.insertDocuments = function (db,collectionName,data,callback) {
    var collection = db.collection(collectionName);
    collection.insertMany(data, function(err, result) {
        if (!err){
            console.log("Inserted  documents into the collection "+ collectionName);
            callback(null,result);
        }else{
            callback("error al insertar los datos",err);
        }
    });
};

mongoDB.getDataCollection = function (db,collectionName,callback) {
    callback(db.collection(collectionName));
};


mongoDB.closeConnection = function (callback) {
    db.close();
};

module.exports = mongoDB;