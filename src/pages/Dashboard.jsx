import React, { useEffect, useState } from 'react';
import { fetchCampaigns, createCampaign } from '../services/api';

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [name, setName] = useState('');
  const [rule, setRule] = useState('');

  // Fetch campaigns on page load
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
      loadCampaigns(); // reload list after creation
    } catch (err) {
      console.error('Error creating campaign:', err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Campaigns</h2>

      {/* Form to create new campaign */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          value={name}
          placeholder="Campaign Name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          value={rule}
          placeholder="Rule (e.g. amount>1000)"
          onChange={(e) => setRule(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Campaign
        </button>
      </form>

      {/* Campaign list */}
      {campaigns.map((c) => (
        <div key={c.id} className="border p-2 rounded mb-2">
          <h3 className="font-bold">{c.name}</h3>
          <p>Rule: {c.rule}</p>
          <p>Created At: {new Date(c.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
