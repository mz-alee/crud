"use client";
import React, { useEffect, useState } from "react";
import { Getpost } from "./Api";
import Post from "./Post";

const page = () => {
  const [isDark, setisDark] = useState(true);
  const handleDark = () => {
    setisDark(!isDark);
    if (!isDark) {
      document.body.backgroundColor = "black";
    } else {
      document.body.backgroundColor = "white";
    }
  };
  return (
    <div className={`maindiv ${isDark ? "darkMode" : "lightMode"}`}>
      <button onClick={handleDark}>{isDark ? "Darkmode" : "lightmode"}</button>
      <Post />
    </div>
  );
};

export default page;
