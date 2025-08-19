<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia; // Jangan lupa impor Inertia
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Menampilkan halaman login.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request) // 2. Ganti Request biasa dengan LoginRequest
    {
        // 3. Panggil metode authenticate dari LoginRequest
        $request->authenticate();

        // 4. Regenerasi session untuk keamanan
        $request->session()->regenerate();

        // 5. Arahkan pengguna ke halaman tujuan
        return redirect()->intended('/admin/teachers');
    }

    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/'); // Arahkan ke halaman utama setelah logout
    }
}
