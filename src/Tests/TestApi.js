import axios from "axios";

const url = "https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo";

export const getFuncTest = () => {
  return axios({
    method: "get",
    url: url,
  }).then((res) => console.log(res.data));
};

export const postFuncTest = (state) => {
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

export const putFuncTest = () => {
  const config = {
    // withCredentials: true,
    name: "Arsen",
  };

  return axios
    .put("https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo/1", config)
    .then((response) => console.log("put"));
};

export const deleteFuncTest = () => {
  return axios
    .delete(`https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo/`)
    .then((response) => console.log("delete"));
};
