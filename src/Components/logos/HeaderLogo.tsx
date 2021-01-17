import React, { FC } from "react";
import styled from "styled-components";

const HeaderLogo: FC = () => {
  return (
    <>
      <HeaderLogoWrapper
        src="https://steamuserimages-a.akamaihd.net/ugc/480023352499647386/DCD88C98B551CF4A4153987C71368327B3502CF4/"
        alt="logo"
      />
    </>
  );
};

const HeaderLogoWrapper = styled("img")`
  width: 60px;
  height: 60px;
  border-radius: 2px;
`;

export default HeaderLogo;
