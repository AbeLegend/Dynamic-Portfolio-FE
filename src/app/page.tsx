"use client";
// lib
import { useEffect, useState } from "react";
// local
import { HomePage } from "@/containers";
import { client, imageUrl } from "@/services/sanity";
import { PortfolioInitialValue, PortfolioType } from "@/types/portfolio-type";
import { usePortfolioContext } from "@/context";
import { Footer, Navbar } from "@/components/templates";

export default function Home() {
  // useState
  const [data, setData] = useState<PortfolioType>(PortfolioInitialValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // useContext
  const { setName, setImage } = usePortfolioContext();

  // function
  const loadFirst = async () => {
    setIsLoading(true);
    try {
      const res = await client.fetch<PortfolioType>(
        `*[_type == "portfolio"][0]`
      );
      setData(res);
      setName(res.name);
      setImage(imageUrl(res.image).url());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect
  useEffect(() => {
    loadFirst();
  }, []);
  return (
    <main>
      <Navbar />
      <HomePage isPreview={false} data={data} isLoading={isLoading} />
      <Footer />
    </main>
  );
}
