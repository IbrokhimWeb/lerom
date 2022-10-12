import axios from "axios";
const mainURL = axios.create({
  baseURL: "http://localhost:5000/",
});
export default mainURL;
