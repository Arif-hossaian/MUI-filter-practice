import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import useStyles from "../../../styles/style.js";

const CustomeFilterToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.toggleButtonGroup}
      exclusive
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value} className={classes.toggle}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomeFilterToggle;
