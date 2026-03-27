"use client";

import { useEffect, useState } from "react";
import { getCampaigns } from "../services/campaign";

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCampaigns();
      setCampaigns(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading campaigns...</p>;

  return (
    <div className="mt-6 w-full max-w-xl">
      <h2 className="text-xl font-bold mb-4 text-black">
        Campaigns
      </h2>

      <ul className="space-y-2">
        {campaigns.map((c) => (
          <li
            key={c.id}
            className="p-3 border rounded-lg flex justify-between"
          >
            <span>{c.name}</span>
            <span>{c.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
