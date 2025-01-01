import React, { useEffect, useState } from "react";
import { Getpost, Delpost, Addpost } from "./Api";
import "./api.css"; // Importing the CSS file
import Form from "./Form";

const Post = () => {
  const [data, setdata] = useState([]);
  const addPost = (newPost) => {
    setdata((prevdata) => [newPost, ...prevdata]);
    console.log("from props");
  };
  const getdata = async () => {
    const res = await Getpost();
    setdata(res.data);
    console.log(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const deldata = async (id) => {
    try {
      await Delpost(id);
      const filtereddata = data.filter((items) => items.id !== id);
      setdata(filtereddata);
      console.log(filtereddata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-container">
      <Form onaddpost={setdata} />
      {data.map((items) => (
        <div className="post-item" key={items.id}>
          <div className="post-content">
            <h4>{items.id}:</h4>
            <h1 className="post-title">{items.title}</h1>
            <p className="post-body">{items.body}</p>
          </div>
          <div className="post-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={() => deldata(items.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
