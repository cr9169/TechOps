import { SvgIconProps } from "@mui/material";
import React from "react";
import "./UserDetailsInput.scss";
import "../../../styles/dark.scss";

const UserDetailsInput = ({
  inputData,
  setInputData,
  GenericMuiIcon,
  placeHolder
}: {
  inputData: string;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  GenericMuiIcon: React.ComponentType<SvgIconProps>;
  placeHolder: string;
}) => {
  return (
    <div className="main-section">
      <GenericMuiIcon style={{ color: "$theme-icons-color" }} />
      <input
        type="text"
        placeholder={placeHolder}
        className="input-data-section"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        maxLength={30}
      />
    </div>
  );
};

export default UserDetailsInput;
