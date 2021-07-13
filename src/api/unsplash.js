import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID ENTER_YOUR_API_SECRET_KEY",
  },
});
