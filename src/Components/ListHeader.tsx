import React from "react";
import styled from "styled-components";

const ListHeader: React.FC = () => {
  return (
    <>
      <Main>
        <HeaderItem>
          <Text>Name17</Text>
        </HeaderItem>
        <HeaderItem>
          <Text>Email</Text>
        </HeaderItem>
        <HeaderItem>
          <Text>description</Text>
        </HeaderItem>
        <HeaderItem>
          <Text>status</Text>
        </HeaderItem>
        <HeaderItemEdit>
          <Text>edit</Text>
        </HeaderItemEdit>
      </Main>
    </>
  );
};

const Main = styled("div")`
  display: flex;
  background-color: #6dba3d;
  height: 45px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const HeaderItem = styled("div")`
  width: 23%;
  display: flex;
  align-items: center;
  padding: 0 0 0 7px;
  border-right: 1px solid #c9f6cd;
`;

const Text = styled("p")`
  word-wrap: break-word;
  width: 100%;
`;
const HeaderItemEdit = styled(HeaderItem)`
  width: 8%;
  justify-content: center;
  border: 0;
`;
export default ListHeader;
