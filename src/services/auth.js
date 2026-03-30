const API = process.env.NEXT_PUBLIC_API_URL;
console.log("API:", process.env.NEXT_PUBLIC_API_URL);


export const registerUser = async (data) => {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include", 
  });

  return res.json();
};

export const logoutUser = async () => {
  await fetch("http://localhost:8080/api/logout", {
    method: "POST",
    credentials: "include", // 🔥 important
  });
};
