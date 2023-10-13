import { SvgIconProps } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../../../utils/StringActions";
import "./UserDetailsInput.scss";

const UserDetailsInput = ({
  inputData,
  setInputData,
  GenericMuiIcon
}: {
  inputData: string;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  GenericMuiIcon: React.ComponentType<SvgIconProps>;
}) => {
  return (
    <div className="main-section">
      <GenericMuiIcon style={{ color: "#80bf02" }} />
      <input
        type="text"
        placeholder={capitalizeFirstLetter(inputData)}
        className="input-data-section"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        maxLength={30}
      />
    </div>
  );
};

export default UserDetailsInput;
