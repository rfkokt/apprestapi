'use strict';

var response = require('./res')
var connection = require('./koneksi')

exports.index = function(req,res){
    response.ok("Aplikasi Berjalan!",res)
};

// menampilkan semua data mahasiswa

exports.tampilSemuaData = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(err, rows, fields){
        if(err){
            connection.log(err)
        }else{
            response.ok(rows,res)
        }
    })
}