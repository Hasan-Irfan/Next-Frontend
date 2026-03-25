export const getHealth = async () => {
  const res = await fetch("http://localhost:8080/api/health");
  return res.json();
};
