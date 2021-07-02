import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/style.js";
import Image from "next/image";

const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.listItemMainDiv}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.ratingAvatar}>
            {rating}🌟
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        className={classes.listItemMedia}
        title="List item"
        
        component="img"
        image={coverSrc}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Delivery Fee ${deliveryFee}
        </Typography>
      </CardContent>
      <div className={classes.cardFooter}>
        <Typography>{serviceTime}</Typography>
        <Typography>{price}</Typography>
      </div>
    </Card>
  );
};

export default ListItem;
