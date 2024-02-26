import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Welocme to my website</h1>
      <div>
        <Link href="users"> Users</Link>
      </div>

      <Link href="photos">Photos</Link>
      <ProductCard />
    </main>
  );
}
