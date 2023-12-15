// lib
import { FC } from "react";
// local
import { inter, poppins } from "@/fonts";

const ImageSection: FC = () => {
  return (
    <section className="rounded-t-xl h-60 w-full bg-gray-400 relative">
      <div className="absolute -bottom-10 left-0 right-0 mx-auto w-40 aspect-square rounded-full bg-gray-100"></div>
    </section>
  );
};

const ProfileSection: FC = () => {
  return (
    <section className="mt-[58px] text-center">
      <h1 className="text-gray-600">Nama</h1>
      <h2 className="text-gray-400 font-bold">Title</h2>
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
      className={`shadow-portfolio-secondary rounded-md px-[26px] py-3 col-span-12 ${poppins.className}`}
    >
      <h2 className="text-gray-700 font-medium">Front End Developer</h2>
      <p className="text-body text-gray-500 font-medium">My Skill</p>
      <p className="text-body text-gray-500">Januari 2023 - Desember 2023</p>
      <p className={`${inter.className} text-body text-gray-600`}>
        Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet
      </p>
    </div>
  );
};

const HomePage: FC = () => {
  return (
    <main className="shadow-portfolio-primary rounded-xl min-h-screen w-[655px] bg-white mx-auto my-3 pb-[38px]">
      <ImageSection />
      <ProfileSection />
      <div className="px-[60px] mt-5">
        <h2 className="text-gray-600 font-bold px-1 mb-[14px]">Portfolio</h2>
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
