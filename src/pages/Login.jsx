import React from 'react';
import './Login.css'; // Import the CSS file

export default function Login() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="decorative-blob"></div>

        <h1 className="login-heading">Welcome to CRM</h1>
        <p className="login-description">
          Streamline your campaigns and manage customer relationships effortlessly.
        </p>

        <button onClick={handleLogin} className="login-button">
          <svg className="google-icon" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C34.2 32.6 29.6 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.5 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.5-.4-3.5z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.2 16.1 18.7 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.5 29.4 4 24 4 15.9 4 9 9.1 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.7-5.2l-6.3-5.2C29.6 36 27 37 24 37c-5.5 0-10.1-3.4-11.8-8.1l-6.6 5.1C9 39 16 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.4-3.9 6.3-7.3 7.5l6.3 5.2C39 36.4 43 30.9 43.6 20.5z" />
          </svg>
          Login with Google
        </button>

        <div className="login-footer">
          © 2025 CRM Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
