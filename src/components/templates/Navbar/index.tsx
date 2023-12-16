"use client";
// lib
import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

// local
import { Button } from "@/components/atoms";
import { cn } from "@/libs/utils";
import { maxMobile, minMobile } from "@/libs/constant";

const Navbar: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const mobile = useMediaQuery({ minWidth: minMobile, maxWidth: maxMobile });
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <nav
      className={cn([
        "px-1 py-0",
        "tablet:px-3",
        "laptop:px-5",
        "desktop:px-5 desktop:py-2",
        "h-[75px] w-full bg-white flex items-center justify-between",
        pathname === "/" && " mb-3",
      ])}
    >
      {/* BEGIN: Button Navigation */}
      <div className="flex gap-x-3">
        {pathname === "/edit-portfolio" ? (
          <Button
            icon="arrow-left"
            iconSize={20}
            iconColor="#10A4B0"
            className="p-1"
            onClick={() => router.back()}
            buttonType="outline"
          />
        ) : (
          <Button
            icon="edit-2"
            iconSize={20}
            iconColor="#10A4B0"
            onClick={() => router.push("/edit-portfolio")}
            buttonType="outline"
          >
            Edit Portfolio
          </Button>
        )}
      </div>
      {/* END: Button Navigation */}
      {/* BEGIN: Title */}
      <div
        className={cn([
          "hidden",
          "tablet:text-primary tablet:text-heading-1 tablet:block",
        ])}
      >
        {pathname === "/edit-portfolio" ? "Edit Portfolio" : "My Portfolio"}
      </div>
      {/* END: Title */}
      {/* BEGIN: Profile */}
      {isMobile ? (
        <>
          <div
            className={cn([isOpen && "absolute inset-0 z-20 bg-black/50"])}
            onClick={() => setIsOpen(false)}
          />
          <Button
            icon="menu"
            iconColor="#10A4B0"
            iconSize={20}
            onClick={() => setIsOpen(true)}
          />
          {isOpen && (
            <div className="absolute h-full w-5/6 top-0 right-0 bg-white z-30">
              <div className="w-full flex justify-end items-center pr-1 h-[75px]">
                <Button
                  icon="x"
                  iconSize={20}
                  iconColor="#10A4B0"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <h2 className="text-primary text-center font-bold">
                {pathname === "/edit-portfolio"
                  ? "Edit Portfolio"
                  : "My Portfolio"}
              </h2>
              <div className="w-16 h-16 rounded-full bg-gray-400 relative mx-auto mt-6" />
              <h3 className="text-center">Anonymous</h3>
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-x-2 items-center">
          <div className="w-8 h-8 rounded-full bg-gray-400 relative"></div>
          <h3>Anonymous</h3>
        </div>
      )}
      {/* END: Profile */}
    </nav>
  );
};

export default Navbar;
