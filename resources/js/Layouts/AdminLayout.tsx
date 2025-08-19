// resources/js/Layouts/AdminLayout.tsx

import { Head, Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

// PropsWithChildren memungkinkan komponen ini menerima komponen lain sebagai 'children'
export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <>
            {/* Head akan mengambil judul dari setiap halaman anak */}
            <Head />
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar Navigasi */}
                <aside className="flex w-64 flex-col bg-gray-800 text-white">
                    <div className="p-4 text-center text-xl font-bold">TK Ceria</div>
                    <nav className="flex-1 p-2">
                        {/* Nanti kita bisa buat link ini aktif secara dinamis */}
                        <Link href={route('teachers.index')} className="block rounded px-4 py-2 hover:bg-gray-700">
                            Manajemen Guru
                        </Link>
                        <Link href="#" className="block rounded px-4 py-2 hover:bg-gray-700">
                            Manajemen Siswa
                        </Link>
                        <Link href="#" className="block rounded px-4 py-2 hover:bg-gray-700">
                            Penilaian
                        </Link>
                    </nav>
                    <div className="border-t border-gray-700 p-4">
                        {/* Tombol Logout */}
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="w-full rounded bg-red-500 px-4 py-2 text-left hover:bg-red-700"
                        >
                            Logout
                        </Link>
                    </div>
                </aside>

                {/* Konten Utama */}
                <main className="flex-1 p-8">{children}</main>
            </div>
        </>
    );
}
