// Trang login phải là Client Component để sử dụng hook useRouter
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  // Hook để điều hướng
  const router = useRouter();

  const handleLogin = (e) => {
    // Ngăn form submit và tải lại trang
    e.preventDefault();
    // Điều hướng tới trang chủ
    router.push("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="login" required />
          <input type="password" placeholder="password" required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}
