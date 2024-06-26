'use client'
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ToppingList from "./topping-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/lib/store/hooks";
import { add } from "@/lib/store/features/cart/cartSlice";

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
};

type PropTypes = {
  product: Product;
};

const ProductCard = ({ product }: PropTypes) => {
  const dispatch = useAppDispatch();

  function handleAddToCart(id: string) {
    dispatch(add(id));
  }

  return (
    <div>
      <Card className="border-none rounded-xl">
        <CardHeader className="flex items-center justify-center">
          <Image
            alt="pizza image"
            width={150}
            height={150}
            src={product.image}
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between mt-4">
          <p>
            <span>From </span>
            <span className="font-bold">₹{product.price}</span>
          </p>

          <Button variant={'ghost'} size={'sm'} onClick={() => handleAddToCart(product.id)}>
            Add to cart
          </Button>

          {/* <Dialog>
            <DialogTrigger
              className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 
            rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-liner trasnsition-all duration-150"
            >
              Choose
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0">
              <div className="flex">
                <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
                  <Image
                    src={"/pizza-main.png"}
                    alt={product.name}
                    width={380}
                    height={380}
                  />
                </div>
                <div className="w-2/3 p-8">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-1">{product.description}</p>
                  <div>
                    <h4 className="mt-6">Choose the size</h4>
                    <RadioGroup
                      defaultValue="small"
                      className="grid grid-cols-3 gap-4 mt-2"
                    >
                      <div>
                        <RadioGroupItem
                          value="small"
                          id="small"
                          className="peer sr-only"
                          aria-label="Small"
                        />
                        <Label
                          htmlFor="small"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Small
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="medium"
                          id="medium"
                          className="peer sr-only"
                          aria-label="Medium"
                        />
                        <Label
                          htmlFor="medium"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Medium
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="large"
                          id="large"
                          className="peer sr-only"
                          aria-label="Large"
                        />
                        <Label
                          htmlFor="large"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Large
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h4 className="mt-6">Choose the crust</h4>
                    <RadioGroup
                      defaultValue="thin"
                      className="grid grid-cols-3 gap-4 mt-2"
                    >
                      <div>
                        <RadioGroupItem
                          value="thin"
                          id="thin"
                          className="peer sr-only"
                          aria-label="Thin"
                        />
                        <Label
                          htmlFor="thin"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Thin
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="thick"
                          id="thick"
                          className="peer sr-only"
                          aria-label="Thick"
                        />
                        <Label
                          htmlFor="thick"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          Thick
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <ToppingList />

                  <div className="flex items-center justify-between mt-12">
                    <span className="font-bold">&#8377;{product.price}</span>
                    <Button>
                      <ShoppingCart size={20}/>
                      <span className="ml-2">Add to cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
