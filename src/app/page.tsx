import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
      <>
      <h1 className="text-6xl">Welcome</h1>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
        <Button variant="link">Button</Button>
      </>
    );
  }