const API = "http://localhost:8080/api";

export const getCampaigns = async () => {
  const res = await fetch(`${API}/campaigns`, {
    cache: "no-store",
    credentials: "include", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return res.json();
};
