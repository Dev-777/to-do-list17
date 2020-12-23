import axios from "axios";

const url = "https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo";

export const getFunc = () => {
  return axios({
    method: "get",
    url: url,
  }).then((res) => res.data);
};

export const postFunc = (state) => {
  console.log(state, "post State");
  const config = {
    withCredentials: true,
    name: state.item.name,
    email: state.item.email,
    description: state.item.description,
    status: "In progress",
  };

  axios.post(url, config).then((response) => console.log(response, "post"));
};

export const putFunc = () => {
  const config = {
    withCredentials: true,
    data: {},
  };

  return axios.put(url, config).then((response) => console.log("put"));
};

export const deleteFunc = () => {
  return axios
    .delete(`https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo/`)
    .then((response) => console.log("delete"));
};
