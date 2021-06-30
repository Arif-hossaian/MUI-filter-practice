import React from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
