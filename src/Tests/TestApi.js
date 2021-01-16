import React from "react";
import axios from "axios";

const TestApi = () => {
  const postF = () => {
    axios("http://localhost:4000/app/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: {
        name: 223,
      },
    })
      .then((response) => console.log(response, "post res"))
      .catch((error) => {
        throw error;
      });
  };

  const getF = () => {
    axios.get("http://localhost:4000/app/data17").then((data) => {
      console.log(data, "get done");
    });
  };
  return (
    <>
      <button onClick={postF}>post</button>
      <button onClick={getF}>get</button>
    </>
  );
};

export default TestApi;
