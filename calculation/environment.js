// jshint node: true, esversion: 6
const co = require('co');
const CronJob = require('cron').CronJob;
const request = require('request');
const mongoClient = require('mongodb').MongoClient;

var environment = {};

environment.run = function () {
    // new CronJob('0 10 * * * *', function() {
       environment.calculation(function(err,res){
            if(!err){
                console.log("todo ok");
            }
            else {
                console.error("error, que pasa?", err);
            }
    });
    // }, null, true, 'Europe/Madrid');

};

environment.calculation = function (callback) {

    request('http://www.mambiente.munimadrid.es/opendata/horario.txt', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            saveData(body);
        }
        else {
            console.error(error);
        }
    });
};

function saveData(data) {
    var dataToSave = parserData(data);


    co(function* () {

        const url = 'mongodb://localhost:27017/environment';
        const db = yield mongoClient.connect(url);
        console.log("Connected correctly to server");

        let stations = yield db.collection('stations').find({}).toArray();
        let parameters = yield db.collection('parameters').find({}).toArray();

        let result = [];
        for( let d of dataToSave){
            let cookData = {};
            let nameStation = d.station;
            let station = stations.find((s) => s.codigo.toString() === nameStation );
            let parameter = parameters.find((p) => p.codigo === parseInt(d.parameter));
            cookData.station = station;
            cookData.parameter = parameter;
            cookData.value = d;
            result.push(cookData);
        }
        let save = yield db.collection('madrid-results').insertMany(result);
        console.log(save);
        db.close();

    }).catch(function (err) {
        console.error(err);
    });

}

function parserData(data){

    var lines=data.split("\n");

    var result = [];

    var names = 'estacion1,estacion2,estacion3,parametros,tecnicanalitica,periodoanalisis,anio,mes,dia,' +
        'h0,v0,h1,v1,h2,v2,h3,v3,h4,v4,h5,v5,h6,v6,h7,v7,h8,v8,h9,v9,h10,v10,h11,v11,' +
        'h12,v12,h13,v13,h14,v14,h15,v15,h16,v16,h17,v17,h18,v18,h19,v19,h20,v20,h21,v21,' +
        'h22,v22,h23,v23';
    var headers=names.split(",");

    for(var i=0;i<lines.length-1;i++){

        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }
     return result.reduce(function (acum,d) {
       var data = {};
       data.station = d.estacion1 + d.estacion2 + d.estacion3;
       data.date = new Date(parseInt(d.anio),parseInt(d.mes),parseInt(d.dia),0,0,0);
       data.values = [];
       data.parameter = d.parametros;
       for(var i = 0; i<=23;i++){
           if(d['v'+i] === 'V') {
               var value = {};
               value.value = d['h' + i];
               value.date = new Date(parseInt(d.anio),parseInt(d.mes),parseInt(d.dia),i,0,0);
               data.values.push(value);
           }
       }
       acum.push(data);
       return acum;

    },[]);
}

module.exports = environment;