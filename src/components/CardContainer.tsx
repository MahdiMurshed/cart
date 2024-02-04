import { cardData } from "@/constants";
import React from "react";
import { DataCard } from "./DataCard";

type Props = {
  data?: Array<{
    id: number;
    title: string;
    description: string;
  }>;
};
const CardContainer = ({ data = cardData }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((card) => {
        return (
          <DataCard key={card.id} id={card.id.toString()} name={card.title} />
        );
      })}
    </div>
  );
};

export default CardContainer;
