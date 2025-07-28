// Layout này cũng cần là Client Component vì Navbar bên trong nó cần dùng hook
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Điều hướng về trang login
    router.push("/login");
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="page-content">{children}</main>
    </div>
  );
}
