"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

type PropType = {
  topping: Topping;
  selectedTopping: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};

const ToppingCard = ({
  topping,
  selectedTopping,
  handleCheckBoxCheck,
}: PropType) => {
  const isCurrentSelected = selectedTopping.some(
    (element) => element.id === topping.id
  );

  return (
    <Button
      onClick={() => handleCheckBoxCheck(topping)}
      variant={"outline"}
      className={cn(
        "flex flex-col h-42 gap-4 border-primary relative",
        isCurrentSelected ? "border-primary" : "border-transparent"
      )}
    >
      <Image alt={topping.name} src={topping.image} width={80} height={80} />
      <h4>{topping.name}</h4>
      <p>&#8377;{topping.price}</p>
      {isCurrentSelected && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}{" "}
    </Button>
  );
};

export default ToppingCard;
