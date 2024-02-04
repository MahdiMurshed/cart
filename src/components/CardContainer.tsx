import { cardData } from "@/constants";
import React from "react";
import { DataCard } from "./DataCard";
import { Video } from "@/lib/videos";

type Props = {
  data: Array<Video>;
};
const CardContainer = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((card) => {
        return (
          <DataCard
            key={card.id}
            id={card.id}
            name={card.title}
            image={card.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
