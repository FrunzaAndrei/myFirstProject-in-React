import React from "react";

const AuthInformation = props => {
  const clickX = () => {
    props.onClickX();
  };
  return (
    <div className="auth-Info-Main">
      <p className="auth-Info-Message">
        -- Authentication error --
        {props.message}
        <span className="btn-x-message" onClick={clickX}>
          X
        </span>
      </p>
    </div>
  );
};

export default AuthInformation;
