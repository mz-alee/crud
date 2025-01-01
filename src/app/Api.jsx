import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const Getpost = () => {
  return api.get("/posts");
};
export const Delpost = (id) => {
  return api.delete(`/posts/${id}`);
};
export const Addpost = (postData) => {
  return api.post("/posts", postData);
};
