import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/product-card";

const products: Product[] = [
  {
    id: "1",
    name: "Onion",
    image: "/pizza-main.png",
    description: "Cheesy crispy pizza.",
    price: 500,
  },
  {
    id: "5",
    name: "Onion",
    image: "/pizza-main.png",
    description: "Cheesy crispy pizza.",
    price: 500,
  },
  {
    id: "2",
    name: "Onion",
    image: "/pizza-main.png",
    description: "Cheesy crispy pizza.",
    price: 500,
  },
  {
    id: "3",
    name: "Onion",
    image: "/pizza-main.png",
    description: "Cheesy crispy pizza.",
    price: 500,
  },
  {
    id: "4",
    name: "Onion",
    image: "/pizza-main.png",
    description: "Cheesy crispy pizza.",
    price: 500,
  },
];
export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-44 flex items-center justify-between py-24">
          <div>
            <h1 className="text-[3.4rem] font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-md rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={380}
              height={380}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container px-44 py-12">
          <Tabs defaultValue="Pizza">
            <TabsList>
              <TabsTrigger value="Pizza" className="text-sm">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="Bevrages" className="text-sm">
                Bevrages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Bevrages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
