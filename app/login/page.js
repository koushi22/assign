'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Login Page</h1>
      <button 
        onClick={() => signIn('github')} 
        style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
      >
        Login with GitHub
      </button>
    </div>
  );
}
