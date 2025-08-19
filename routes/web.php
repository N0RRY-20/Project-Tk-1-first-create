<?php

use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
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
    return to_route('login');
});

// 2. Rute untuk tamu (pengguna yang BELUM login)
Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    // Rute untuk register akan kita tambahkan di sini nanti
});

// 3. Rute untuk pengguna yang SUDAH login
Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::prefix('admin')->group(function () {
        Route::resource('teachers', TeacherController::class);
    });
});
