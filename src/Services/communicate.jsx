import axios from "axios";

const getAll = async (url) => {
  return await axios({
    method: "get",
    url: url,
  }).then((res) => res.data);
};
const getById = async (url) => {
  return await axios({
    method: "get",
    url: url,
  }).then((res) => res.data);
};

export default { getAll, getById };
