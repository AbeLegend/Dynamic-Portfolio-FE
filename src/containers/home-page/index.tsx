"use client";

// lib
import { FC } from "react";
import Image from "next/image";
import { imageUrl } from "@/services/sanity";
import { format } from "date-fns";

// local
import { inter, poppins } from "@/libs/fonts";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";
import { ListPortfolioType, PortfolioType } from "@/types/portfolio-type";

interface HomePageProps {
  isPreview: boolean;
  data: PortfolioType;
  isLoading: boolean;
  base64Image?: string;
  base64ImageCover?: string;
}

const ImageSection: FC<HomePageProps> = ({
  isPreview,
  data,
  isLoading,
  base64Image,
  base64ImageCover,
}) => {
  return (
    <section
      className={cn([
        "h-40",
        "tablet:h-60",
        "rounded-t-xl w-full relative",
        isPreview && "tablet:h-44 laptop:h-60",
      ])}
    >
      {isLoading ? (
        <div className="w-full h-full bg-gray-400 animate-pulse rounded-t-xl" />
      ) : isPreview ? (
        base64ImageCover ? (
          <Image
            alt="preview cover"
            src={base64ImageCover}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        ) : (
          <Image
            alt="preview cover"
            src={imageUrl(data.imageCover).url()}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        )
      ) : (
        <Image
          alt="image cover"
          src={imageUrl(data.imageCover).url()}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      )}

      <div
        className={cn([
          "w-32",
          "tablet:w-40",
          "absolute -bottom-10 left-0 right-0 mx-auto aspect-square rounded-full bg-white",
          isPreview && "tablet:w-32 laptop:w-40",
        ])}
      >
        {isLoading ? (
          <div className="w-full h-full bg-gray-100 animate-pulse rounded-full" />
        ) : isPreview ? (
          base64Image ? (
            <Image
              alt="preview profile"
              src={base64Image}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          ) : (
            <Image
              alt="preview profile"
              src={imageUrl(data.image).url()}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          )
        ) : (
          <Image
            alt="image profile"
            src={imageUrl(data.image).url()}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        )}
      </div>
    </section>
  );
};

const ProfileSection: FC<HomePageProps> = ({ isPreview, data }) => {
  return (
    <section className="mt-[58px] text-center">
      <h2
        className={cn(["tablet:text-heading-1", "font-bold", "text-gray-600"])}
      >
        {data.name}
      </h2>
      <h3
        className={cn([
          "tablet:text-heading-2 tablet:font-bold",
          "text-gray-400",
        ])}
      >
        {data.title}
      </h3>
      <p className="text-body text-gray-600 max-w-[303px] mx-auto">
        {data.description}
      </p>
    </section>
  );
};

const Portfolio: FC<{ data: ListPortfolioType }> = ({ data }) => {
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
        {data.position}
      </h3>
      <p className="text-body text-gray-500 font-medium">{data.company}</p>
      <p className="text-body text-gray-500">
        {data.startDate && format(new Date(data.startDate), "MMMM yyyy")} -{" "}
        {data.endDate && format(new Date(data.endDate), "MMMM yyyy")}
      </p>
      <p className={`${inter.className} text-body text-gray-600`}>
        {data.description}
      </p>
    </div>
  );
};

const HomePage: FC<HomePageProps> = ({
  isPreview,
  data,
  isLoading,
  base64Image,
  base64ImageCover,
}) => {
  // usePathname
  const pathName = usePathname();
  return (
    <main
      className={cn([
        "w-full",
        pathName === "/" && "laptop:w-[655px]",
        "shadow-portfolio-primary rounded-xl min-h-screen bg-white mx-auto pb-[38px]",
      ])}
    >
      <ImageSection
        isPreview={isPreview}
        data={data}
        isLoading={isLoading}
        base64Image={base64Image}
        base64ImageCover={base64ImageCover}
      />
      <ProfileSection
        isPreview={isPreview}
        data={data}
        isLoading={isLoading}
        base64Image={base64Image}
        base64ImageCover={base64ImageCover}
      />
      <div
        className={cn([
          "px-1",
          "tablet:px-[60px] ",
          "mt-5",
          isPreview && "tablet:px-2 laptop:px-[40px]",
        ])}
      >
        <h3
          className={cn([
            "tablet:text-heading-2 tablet:font-bold tablet:mb-[14px]",
            "text-gray-600 px-1",
          ])}
        >
          Portfolio
        </h3>
        <div className="grid grid-cols-12 gap-y-[38px]">
          {data.portfolio.length > 0 &&
            data.portfolio.map((item, index) => {
              return <Portfolio key={index} data={item} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
