import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c6ed60d13a04a17a929d97ce6069064",
  },
});
