import React, { useState, useEffect } from "react";

// Set Cookie
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

// Get Cookie
const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) return cookieValue;
  }
  return null;
};

// Delete Cookie
const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

const CookieExample = () => {
  const [user, setUser] = useState(getCookie("username") || "");

  useEffect(() => {
    // Example: Setting cookie on initial render
    if (user) {
      setCookie("username", user, 7); // Save username cookie for 7 days
    }
  }, [user]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleDelete = () => {
    deleteCookie("username");
    setUser(""); // Clear state
  };

  return (
    <div>
      <h2>React Cookie Example</h2>
      <input
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <button onClick={() => setUser(user)}>Save Username</button>
      <button onClick={handleDelete}>Delete Username</button>
      <p>Stored Username: {getCookie("username")}</p>
    </div>
  );
};

export default CookieExample;
