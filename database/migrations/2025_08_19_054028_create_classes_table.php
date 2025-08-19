<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('class_name', 100); // Nama kelas, misal "Kelas A (Usia 4-5 Tahun)"
            $table->string('academic_year', 9); // Tahun Ajaran, misal "2024/2025"

            // Kolom Foreign Key untuk guru
            $table->foreignId('teacher_id')
                ->nullable() // Boleh kosong, mungkin guru belum ditugaskan
                ->constrained('users') // Terhubung ke kolom `id` di tabel `users`
                ->onDelete('set null'); // Jika guru dihapus, kolom ini jadi NULL, bukan hapus kelasnya

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
