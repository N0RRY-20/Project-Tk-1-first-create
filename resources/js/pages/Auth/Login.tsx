import { Head, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';

export default function Login() {
    // 1. Menggunakan hook useForm dari Inertia
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    // 2. Fungsi yang akan dipanggil saat form di-submit
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Mengirim data form ke rute 'login' yang sudah kita buat
        post(route('login'));
    };

    return (
        <>
            <Head title="Login" />

            {/* Layout untuk menengahkan form di tengah halaman */}
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                {/* Kartu form login */}
                <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                    <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Login ke Akun Anda</h1>

                    <form onSubmit={submit}>
                        {/* Kolom Username */}
                        <div className="mb-4">
                            <label htmlFor="username" className="mb-2 block text-sm font-bold text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                required
                                autoFocus
                            />
                            {/* Tempat untuk menampilkan error validasi nanti */}
                            {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
                        </div>

                        {/* Kolom Password */}
                        <div className="mb-6">
                            <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                required
                            />
                            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                        </div>

                        {/* Tombol Submit */}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                disabled={processing} // Tombol akan non-aktif saat form sedang diproses
                            >
                                {processing ? 'Memproses...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
