<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
}
