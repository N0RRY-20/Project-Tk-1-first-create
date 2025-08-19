<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    use HasFactory;
    protected $table = 'classes';

    protected $fillable = [
        'class_name',
        'academic_year',
        'teacher_id',
    ];

    // Relasi: Satu kelas diajar oleh satu guru (user)
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    // Relasi: Satu kelas memiliki banyak siswa
    public function students()
    {
        return $this->hasMany(Student::class, 'class_id');
    }
}
