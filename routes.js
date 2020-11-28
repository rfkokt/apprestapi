'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilSemuaData)

    app.route('/tampil/:id')
    .get(jsonku.tampilByID)

    app.route('/simpanmahasiswa')
    .post(jsonku.tambahMahasiswa)
}