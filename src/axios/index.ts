import axios from "axios";

const instant = axios.create({
  baseURL: "http://106.53.217.225/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instant;
