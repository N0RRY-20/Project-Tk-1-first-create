<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{

    use HasFactory;
    // Meskipun Laravel pintar, mendefinisikan nama tabel secara eksplisit adalah praktik yang baik.
    protected $table = 'students';

    protected $fillable = [
        'full_name',
        'nickname',
        'date_of_birth',
        'gender',
        'activation_code',
        'class_id',
        'parent_id',
    ];

    // Relasi: Seorang siswa dimiliki oleh satu kelas
    public function class()
    {
        return $this->belongsTo(ClassModel::class, 'class_id');
    }

    // Relasi: Seorang siswa dimiliki oleh satu orang tua (user)
    public function parent()
    {
        return $this->belongsTo(User::class, 'parent_id');
    }

    // Relasi: Seorang siswa memiliki banyak data penilaian
    public function assessments()
    {
        return $this->hasMany(Assessment::class, 'student_id');
    }
}
