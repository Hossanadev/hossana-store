import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { ProductItem } from "@/components/ProductItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Hossana"}>
      <div className="">
        <ProductItem />
      </div>
    </Layout>
  );
}
