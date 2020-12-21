import axios from "axios";
export const getFunc = () => {
  axios({
    method: "get",
    url: "https://5fe0a87c04f0780017de92b5.mockapi.io/AS7/Arsen",
  }).then((res) => res.data.data);
};

export const postFunc = (state) => {
  const config = {
    withCredentials: true,
    data: state.item,
  };

  axios
    .post("https://5fe0a87c04f0780017de92b5.mockapi.io/AS7/Arsen", config)
    .then((response) => console.log(response, "post"));
};

export const putFunc = () => {
  const config = {
    withCredentials: true,
    data: {},
  };

  axios
    .put("https://5fe0a87c04f0780017de92b5.mockapi.io/AS7/Arsen", config)
    .then((response) => console.log("put"));
};

export const deleteFunc = () => {
  axios
    .delete("https://5fe0a87c04f0780017de92b5.mockapi.io/AS7/Arsen/5")
    .then((response) => console.log("delete"));
};
