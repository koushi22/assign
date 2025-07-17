'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <div><Link href="/">Interv2</Link></div>
      <div>
        {session ? (
          <button onClick={() => signOut()} style={{ background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <Link href="/login">Login with GitHub</Link>
        )}
      </div>
    </nav>
  );
}
