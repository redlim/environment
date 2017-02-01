var expect 	= require('chai').expect;
var fs = require('fs');
var db;
var globalDB;
describe('Db', function() {
    describe('Require ,connect', function () {
        it('load module', function(done) {
            var db = require('../db/db.js');
            expect(db).to.be.equal(require('../db/db.js'));
            done();
        });
        it('connect to database ',function (done) {
            var url = 'mongodb://localhost:27017/test';
            var db = require('../db/db.js');
            db.connection(url,function (err,res) {
                expect(err).to.be.equal(null);
                done()
            })
        });
    });
        describe('Save Data', function () {
            beforeEach(function(done) {
                db = require('../db/db.js');
                var url = 'mongodb://localhost:27017/test';
                db.connection(url,function (err,res) {
                    globalDB = res;
                    done()
                })
            });
            it('save some data',function (done) {
                db.insertDocuments(globalDB,"prueba1",[{a : 1}, {a : 2}, {a : 3}],function (err,res) {
                    expect(err).to.be.equal(null);
                    done()
                })
            });
        })
});