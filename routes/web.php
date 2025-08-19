<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Di sinilah kita akan mendaftarkan semua rute untuk aplikasi web kita.
|
*/

Route::get('/', function () {
    // Ini adalah rute utama yang akan menampilkan halaman Home kita
    return Inertia::render('Home');
});
