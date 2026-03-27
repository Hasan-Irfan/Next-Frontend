export const getCampaigns = async () => {
  const res = await fetch("http://localhost:8080/api/campaigns", {
    cache: "no-store",
    credentials: "include", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return res.json();
};
