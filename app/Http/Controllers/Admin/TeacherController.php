<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreTeacherRequest;
use Illuminate\Http\Request;
use Inertia\Inertia; // Jangan lupa impor Inertia
use App\Models\User;   // Jangan lupa impor Model User
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 1. Ambil semua user yang memiliki role 'guru'
        $teachers = User::where('role', 'guru')->get();

        // 2. Kirim data ke halaman React
        return Inertia::render('Admin/Teachers/Index', [
            'teachers' => $teachers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Teachers/Create');
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeacherRequest $request)
    {
        // Buat user baru dengan data yang sudah divalidasi
        User::create([
            'name' => $request->name,
            'username' => $request->username,
            'phone_number' => $request->phone_number,
            'password' => Hash::make($request->password), // SANGAT PENTING: Selalu hash password
            'role' => 'guru', // Otomatis set role sebagai 'guru'
        ]);

        // Arahkan kembali ke halaman daftar guru
        return to_route('teachers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
