"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <NavBar />
      <main className="page-content">{children}</main>
    </div>
  );
}
