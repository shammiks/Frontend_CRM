import React, { useEffect, useState } from 'react';
import { fetchCampaigns, createCampaign } from '../services/api';

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [name, setName] = useState('');
  const [rule, setRule] = useState('');

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      const data = await fetchCampaigns();
      setCampaigns(data);
    } catch (err) {
      console.error('Error fetching campaigns:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(name, rule);
      setName('');
      setRule('');
      loadCampaigns();
    } catch (err) {
      console.error('Error creating campaign:', err);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">🎯 Manage Campaigns</h2>

      <form onSubmit={handleSubmit} className="campaign-form">
        <div className="decorative-blob"></div>

        <div className="form-group">
          <label>Campaign Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Summer Promo"
            required
          />
        </div>

        <div className="form-group">
          <label>Rule</label>
          <input
            type="text"
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            placeholder="e.g., cart_value > 1000"
            required
          />
        </div>

        <button type="submit" className="create-button">
          🚀 Create Campaign
        </button>
      </form>

      <div className="campaign-grid">
        {campaigns.map((c, i) => (
          <div key={i} className="campaign-card">
            <h3>{c.name}</h3>
            <p>{c.rule}</p>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style>{`
        .dashboard-container {
          min-height: 100vh;
          background: linear-gradient(to top right, #c7d2fe, #fbcfe8, #fef3c7);
          padding: 40px;
          animation: fade-in 1s ease-out;
          font-family: 'Segoe UI', sans-serif;
        }

        .dashboard-header {
          font-size: 3rem;
          font-weight: 900;
          text-align: center;
          color: #1e3a8a;
          margin-bottom: 50px;
          animation: slide-in-down 0.8s ease-out;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .campaign-form {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto 60px auto;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          animation: slide-in-up 0.8s ease-out;
        }

        .decorative-blob {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 80px;
          height: 80px;
          background: linear-gradient(to bottom right, #818cf8, #a78bfa);
          border-radius: 9999px;
          opacity: 0.2;
          filter: blur(16px);
          animation: float-slow 6s ease-in-out infinite;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: #4b5563;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 12px;
          font-size: 1rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }

        .form-group input:focus {
          border-color: #818cf8;
          outline: none;
          box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.3);
        }

        .create-button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          color: white;
          font-weight: bold;
          font-size: 1.1rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          animation: pop-in 0.5s ease-out;
        }

        .create-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

        .create-button:active {
          transform: scale(0.97);
        }

        .campaign-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          padding: 0 16px;
        }

        .campaign-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 24px;
          border-radius: 18px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: fade-in 0.8s ease-out;
        }

        .campaign-card:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }

        .campaign-card h3 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #3730a3;
          margin-bottom: 6px;
        }

        .campaign-card p {
          font-size: 0.95rem;
          color: #4b5563;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pop-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
