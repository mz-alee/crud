"use client ";
import React, { useEffect, useState } from "react";
import { Addpost } from "./Api";
const Form = (onaddpost) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const titledata = (e) => {
    settitle(e.target.value);
  };
  const bodydata = (e) => {
    setbody(e.target.value);
  };
  const handleform = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        id: Date.now(),
        title: title,
        body: body,
      };

      const response = await Addpost(postData);
      onaddpost(postData);
      alert("Post added successfully: " + response.data.id);
    } catch (error) {
      console.log("add post error " + error);
    }
    console.log("form submited ", { title, body });
    settitle("");
    setbody("");
  };
  return (
    <div>
      <form onSubmit={handleform}>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={titledata}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="body"
          name="body"
          value={body}
          onChange={bodydata}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
