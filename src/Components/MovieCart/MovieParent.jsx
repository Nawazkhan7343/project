import React from "react";
import { Movie } from "./Movie";
import { data } from "../../Service/data";

export const MovieParent = () => {
  return (
    <div>
      {data.map((item) => {
        return <Movie item={item} />;
      })}
    </div>
  );
};
