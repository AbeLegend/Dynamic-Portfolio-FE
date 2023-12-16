"use client";

// lib
import { FC } from "react";
// local
import { inter, poppins } from "@/libs/fonts";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";

const ImageSection: FC = () => {
  return (
    <section
      className={cn([
        "h-40",
        "tablet:h-60",
        "rounded-t-xl w-full bg-gray-400 relative",
      ])}
    >
      <div
        className={cn([
          "w-32",
          "tablet:w-40",
          "absolute -bottom-10 left-0 right-0 mx-auto aspect-square rounded-full bg-gray-100",
        ])}
      ></div>
    </section>
  );
};

const ProfileSection: FC = () => {
  return (
    <section className="mt-[58px] text-center">
      <h2
        className={cn(["tablet:text-heading-1", "font-bold", "text-gray-600"])}
      >
        Nama
      </h2>
      <h3
        className={cn([
          "tablet:text-heading-2 tablet:font-bold",
          "text-gray-400",
        ])}
      >
        Title
      </h3>
      <p className="text-body text-gray-600 max-w-[303px] mx-auto">
        Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet
      </p>
    </section>
  );
};

const Portfolio: FC = () => {
  return (
    <div
      className={cn([
        "shadow-portfolio-secondary rounded-md px-[26px] py-3 col-span-12",
        poppins.className,
      ])}
    >
      <h3
        className={cn(["tablet:text-heading-2", "text-gray-700 font-medium"])}
      >
        Front End Developer
      </h3>
      <p className="text-body text-gray-500 font-medium">My Skill</p>
      <p className="text-body text-gray-500">Januari 2023 - Desember 2023</p>
      <p className={`${inter.className} text-body text-gray-600`}>
        Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet
      </p>
    </div>
  );
};

interface HomePageProps {
  isPreview: boolean;
}
const HomePage: FC<HomePageProps> = ({ isPreview }) => {
  const pathName = usePathname();
  return (
    <main
      className={cn([
        "w-full",
        pathName === "/" && "laptop:w-[655px]",
        "shadow-portfolio-primary rounded-xl min-h-screen bg-white mx-auto pb-[38px]",
      ])}
    >
      <ImageSection />
      <ProfileSection />
      <div className={cn(["px-1", "tablet:px-[60px] ", "mt-5"])}>
        <h3
          className={cn([
            "tablet:text-heading-2 tablet:font-bold tablet:mb-[14px]",
            "text-gray-600 px-1",
          ])}
        >
          Portfolio
        </h3>
        <div className="grid grid-cols-12 gap-y-[38px]">
          {Array(2)
            .fill(null)
            .map((item, index) => {
              return <Portfolio key={index} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
