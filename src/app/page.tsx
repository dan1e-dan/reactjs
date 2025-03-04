"use client"
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const handleLogin = (e:any) => {
    e.preventDefault();
    // Add your login logic here. For demo, we simply check for a static user.
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Here you might redirect the user or set authentication state.
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <form
      onSubmit={handleLogin}
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        width: '300px',
      }}
    >
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
            marginTop: '5px',
          }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
            marginTop: '5px',
          }}
        />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px' }}>
        Login
      </button>
    </form>
  </div>
  );
}
