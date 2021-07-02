import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/style.js";

const CustomeCheckbox = ({cuisine, changeChecked}) => {
  const classes = useStyles();
  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              chekboxMainDiv: classes.chekboxMainDiv,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CustomeCheckbox;
