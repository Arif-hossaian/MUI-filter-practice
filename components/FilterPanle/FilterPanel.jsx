import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React from "react";
import { categoryList, ratingList } from "../constants/data";
import CustomeCheckbox from "../custom/Checkbox/CustomeCheckbox";
import CustomeFilterToggle from "../custom/FilterListToggle/CustomeFilterToggle";
import useStyles from "../../styles/style.js";
import CustomeSlider from "../custom/Slider/CustomeSlider";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectRating,
  selectRatingToggle,
  cusineOptions,
  changeChecked,
  selectedPrice,
  changedPrice,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.globalMargin}>
        <CardContent>
          <CardHeader title="Category" />
          <CustomeFilterToggle
            options={categoryList}
            value={selectedCategory}
            selectToggle={selectToggle}
          />
        </CardContent>
      </Card>
      <Card className={classes.globalMargin}>
        <CardContent>
          <CardHeader title="Star rating" />
          <CustomeFilterToggle
            options={ratingList}
            value={selectRating}
            selectToggle={selectRatingToggle}
          />
        </CardContent>
      </Card>
      <Card className={classes.globalMargin}>
        <CardContent>
          <CardHeader title="Price range" />
          <CustomeSlider value={selectedPrice} changePrice={changedPrice} />
        </CardContent>
      </Card>
      <Card className={classes.globalMargin}>
        <CardContent>
          <CardHeader title="Cusines Options" />
          {cusineOptions.map((cusineOption) => (
            <CustomeCheckbox
              key={cusineOption.id}
              changeChecked={changeChecked}
              cuisine={cusineOption}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterPanel;
