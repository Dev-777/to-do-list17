import React, { FC } from "react";
import styled from "styled-components";

const UserLogo: FC = () => {
  return (
    <>
      <UserLogoWrapper>
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          alt="user logo"
        />
      </UserLogoWrapper>
    </>
  );
};

const UserLogoWrapper = styled("div")`
  width: 50px;
  height: 50px;
  & > img {
    width: 50px;
    height: 50px;
  }
`;

export default UserLogo;
