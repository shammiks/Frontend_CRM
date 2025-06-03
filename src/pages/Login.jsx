import React from 'react';

export default function Login() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Login to CRM</h1>
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Login with Google
      </button>
    </div>
  );
}
