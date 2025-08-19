// resources/js/Pages/Admin/Teachers/Create.tsx

import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent, ReactNode } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        username: '',
        phone_number: '',
        password: '',
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('teachers.store'));
    };

    return (
        <>
            <Head title="Tambah Guru" />
            <h1 className="mb-6 text-3xl font-bold text-gray-700">Tambah Guru Baru</h1>

            <div className="max-w-2xl overflow-hidden rounded-lg bg-white p-8 shadow-md">
                <form onSubmit={submit}>
                    {/* ... (di sini kita akan isi dengan input fields) ... */}
                    {/* Disini kita akan membuat input fields untuk name, username, phone_number, password */}
                    {/* Contoh untuk satu field: */}
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
                        />
                        {errors.name && <div className="mt-1 text-xs text-red-500">{errors.name}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
                        />
                        {errors.username && <div className="mt-1 text-xs text-red-500">{errors.username}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
                            phone_number
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
                        />
                        {errors.phone_number && <div className="mt-1 text-xs text-red-500">{errors.phone_number}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
                            password
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
                        />
                        {errors.password && <div className="mt-1 text-xs text-red-500">{errors.password}</div>}
                    </div>

                    {/* Lanjutkan untuk username, phone_number, dan password dengan pola yang sama */}

                    <div className="flex items-center gap-4">
                        <button type="submit" disabled={processing} className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                            Simpan
                        </button>
                        <Link href={route('teachers.index')} className="text-gray-600 hover:underline">
                            Batal
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
Create.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
