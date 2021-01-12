import React, { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import {
  postCode,
  inputOnchange,
} from "../../../store/signUp/approveSignUp/actions";
import RegistrationLoading from "../../../Components/loadings/RegistrationLoading";

const ApproveSignUp: FC = () => {
  const dispatch = useDispatch();

  const onchange = (event: string) => {
    dispatch(inputOnchange(event));
  };

  const click: any = () => {
    dispatch(postCode());
  };
  return (
    <>
      <div>
        {true ? <RegistrationLoading /> : null}

        <label>
          <p>
            We send the approval code in your email, please write that code in
            input to complete registration
          </p>
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onchange(e.target.value)
            }
          />
          <button onClick={click}>ok</button>
        </label>
      </div>
    </>
  );
};

export default ApproveSignUp;
