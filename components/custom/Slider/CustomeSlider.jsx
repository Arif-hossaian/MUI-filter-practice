import React from "react";
import { Slider } from "@material-ui/core";
import useStyles from "../../../styles/style.js";

const CustomeSlider = ({ value, changePrice }) => {
  const classes = useStyles();
  return (
    <div className={classes.sliderMainDiv}>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1000}
        max={5000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default CustomeSlider;
