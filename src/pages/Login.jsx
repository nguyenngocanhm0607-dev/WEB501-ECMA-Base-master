import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/login", form);

            localStorage.setItem("token", res.data.accessToken);

            toast.success("Đăng nhập thành công!");
            navigate("/list");
        } catch (error) {
            toast.error("Sai tài khoản hoặc mật khẩu!");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Đăng nhập</h1>

            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <button
                    className="w-full bg-green-600 text-white py-2 rounded mt-4"
                    type="submit"
                >
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}
