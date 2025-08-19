import type { User } from '@/types';
import { Head, Link } from '@inertiajs/react';
// 1. Impor AdminLayout
import AdminLayout from '@/Layouts/AdminLayout';
import type { ReactNode } from 'react';

export default function Index({ teachers }: { teachers: User[] }) {
    return (
        // Menggunakan padding dan ukuran font default dari layout
        <>
            <Head title="Manajemen Guru" />
            <div className="flex items-center justify-between">
                <h1 className="mb-6 text-3xl font-bold text-gray-700">Manajemen Guru</h1>
                {/* 2. Tambahkan tombol ini */}
                <Link href={route('teachers.create')} className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                    Tambah Guru Baru
                </Link>
            </div>

            {/* Memberi bayangan, sudut membulat, dan menyembunyikan overflow */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            {/* Styling untuk header tabel */}
                            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">Nama</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">Username</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">No. HP</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {/* Memberi efek hover pada setiap baris */}
                        {teachers.map((teacher) => (
                            <tr key={teacher.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-800">{teacher.name}</td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{teacher.username}</td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{teacher.phone_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
Index.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
