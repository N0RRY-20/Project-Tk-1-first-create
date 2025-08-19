<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'teacher_id',
        'assessment_date',
        'skill_category',
        'description',
        'score',
    ];

    // Relasi: Sebuah data penilaian dimiliki oleh satu siswa
    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    // Relasi: Sebuah data penilaian dibuat oleh satu guru (user)
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
