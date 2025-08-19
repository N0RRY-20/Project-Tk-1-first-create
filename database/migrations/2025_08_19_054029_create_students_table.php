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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('nickname')->nullable();
            $table->date('date_of_birth');
            $table->enum('gender', ['Laki-laki', 'Perempuan']);

            // --- PERUBAHAN DI SINI ---
            $table->string('activation_code', 10)->unique()->nullable(); // Kode unik untuk registrasi orang tua

            $table->foreignId('class_id')
                ->nullable()
                ->constrained('classes')
                ->onDelete('set null');

            // parent_id sekarang WAJIB nullable
            $table->foreignId('parent_id')
                ->nullable() // Wajib nullable karena diisi setelah orang tua registrasi
                ->constrained('users')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
