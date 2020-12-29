import React, { FC } from "react";
import styled from "styled-components";
import { edit } from "../Actions";
import { useDispatch } from "react-redux";
import { ListItemProsType } from "./types/Types";

const ListItem: FC<ListItemProsType> = ({
  name,
  email,
  description,
  status,
  index,
}) => {
  const dispatch: any = useDispatch();
  return (
    <>
      <Main>
        <HeaderItem>
          <Text>{name}</Text>
        </HeaderItem>
        <HeaderItem>
          <Text>{email}</Text>
        </HeaderItem>
        <HeaderItem>
          <Text>{description}</Text>
        </HeaderItem>
        <HeaderItem>
          <Text>{status}</Text>
        </HeaderItem>
        <HeaderItemEdit>
          <EditButton
            onClick={() => {
              return dispatch(edit(index));
            }}
          >
            edit
          </EditButton>
        </HeaderItemEdit>
      </Main>
    </>
  );
};

const Main = styled("div")`
  display: flex;
  width: 100%;
  background-color: #f3aebb;
  height: 45px;
  margin: 5px 0 0 0;
  border-radius: 3px;
`;
const HeaderItem = styled("div")`
  width: 23%;
  display: flex;
  align-items: center;
  padding: 0 0 0 7px;
  border-right: 1px solid wheat;
`;

const Text = styled("p")`
  word-wrap: break-word;
  width: 100%;
`;
const HeaderItemEdit = styled(HeaderItem)`
  width: 8%;
  border: 0;
`;
const EditButton = styled("div")``;

export default ListItem;
