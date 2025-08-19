// resources/js/types/index.d.ts

import type { Config } from 'ziggy-js';

// Mendefinisikan bentuk data untuk setiap Model utama kita
// Ini akan menjadi "Kamus Data" utama untuk frontend Anda.

export type User = {
    id: number;
    name: string;
    username: string;
    phone_number: string | null;
    role: 'admin' | 'guru' | 'orangtua';
};

export type Student = {
    id: number;
    full_name: string;
    nickname: string | null;
    date_of_birth: string;
    gender: 'Laki-laki' | 'Perempuan';
    activation_code: string | null;
    class_id: number | null;
    parent_id: number | null;
};

export type ClassModel = {
    id: number;
    class_name: string;
    academic_year: string;
    teacher_id: number | null;
};

export type Assessment = {
    id: number;
    student_id: number;
    teacher_id: number;
    assessment_date: string;
    skill_category: string;
    description: string;
    score: string;
};

// Mendefinisikan bentuk data yang kita bagikan secara global dari Laravel
// Ini harus cocok dengan isi method share() di HandleInertiaRequests.php
export type SharedData = {
    name: string;
    auth: {
        user: User | null;
    };
    ziggy: Config & { location: string };
};
