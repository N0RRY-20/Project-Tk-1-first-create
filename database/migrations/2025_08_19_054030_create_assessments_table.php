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
        Schema::create('assessments', function (Blueprint $table) {
            $table->id();

            // Foreign Keys
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade');
            $table->foreignId('teacher_id')->constrained('users')->onDelete('cascade');

            $table->date('assessment_date');
            $table->string('skill_category'); // misal: "Kognitif", "Motorik", "Sosial Emosional"
            $table->text('description'); // Deskripsi/catatan dari guru (lebih panjang dari string)
            $table->string('score', 50); // misal: "BB", "MB", "BSH", "BSB" atau nilai deskriptif lainnya

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assessments');
    }
};
