import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
      <>
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