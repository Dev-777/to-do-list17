import axios from "axios";

export const getFunc = () => {
  axios({
    method: "get",
    url: "https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d",
  }).then((res) => res.data);
};

export const postFunc = (state) => {
  const config = {
    withCredentials: true,
    data: state.item,
  };

  axios
    .post("https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d", config)
    .then((response) => console.log(response, "post"));
};

const putFunc = () => {
  const config = {
    withCredentials: true,
    data: {
      name: "change 1700000000",
      age: 19,
    },
  };

  axios
    .put(
      "https://crudcrud.com/api/9ab57387487f4caa98989aff6d9b379d/test172317/5fdcc153e445ab03e8f70e16",
      config
    )
    .then((response) => console.log("post"));
};
