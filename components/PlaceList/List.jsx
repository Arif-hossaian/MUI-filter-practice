import { Grid } from "@material-ui/core";
import React from "react";
import ListItem from "./ListItem/ListItem";
import useStyles from "../../styles/style.js"

const List = ({ list }) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={3}>
        {list.map((item) => (
          <Grid key={item.id} xs={12} md={4}>
            <ListItem item={item} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default List;
