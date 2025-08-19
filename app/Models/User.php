<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;


    protected $fillable = [
        'name',
        'username',
        'phone_number',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    // Relasi: Satu guru (user) hanya mengajar satu kelas
    public function class()
    {
        return $this->hasOne(ClassModel::class, 'teacher_id');
    }

    // Relasi: Satu orang tua (user) hanya memiliki satu data anak di sekolah
    public function student()
    {
        return $this->hasOne(Student::class, 'parent_id');
    }
}
