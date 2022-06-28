import axios from "axios";

const getAll = async () => {
  return await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  }).then((res) => res.data);
};

export default { getAll };
