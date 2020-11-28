'use strict';

var response = require('./res')
var connection = require('./koneksi')

exports.index = function (req, res) {
    response.ok("Aplikasi Berjalan!", res)
};

// menampilkan semua data mahasiswa

exports.tampilSemuaData = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            response.ok(rows, res)
        }
    })
}


// menampilkan semua data berdasarkan ID

exports.tampilByID = function (req, res) {
    const id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function (err, rows, fields) {
            if (err) {
                console.log(err)
            } else {
                response.ok(rows, res)
            }
        }
    )
}

// menambahkan data mahasiswa

exports.tambahMahasiswa = function (req, res) {
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (err, rows, fields) {
            if (err) {
                console.log(err)
            } else {
                response.ok("Berhasil menambahkan data!", res)
            }
        }
    )
}

// mengubah data berdasarkan ID

exports.ubahDataMahasiswa = function (req, res) {
    const id = req.body.id_mahasiswa;
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',
        [nim, nama, jurusan, id],
        function (err, rows, fields) {
            if (err) {
                console.log(err)
            } else {
                response.ok("Berhasil ubah data!", res)
            }
        }
    )
}

// Menghapus data 

exports.hapusDataMahasiswa = function (req, res) {
    const id = req.body.id_mahasiswa
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (err, rows, fields) {
            if (err) {
                console.log(err)
            } else {
                response.ok("Berhasil hapus data!", res)
            }
        }
    )
}