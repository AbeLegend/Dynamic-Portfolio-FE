"use client";
// lib
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

// local
import { Button } from "@/components/atoms";
import { cn } from "@/libs/utils";

const Profile: FC = () => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="w-8 h-8 rounded-full bg-gray-400 relative"></div>
      <h3>Name</h3>
    </div>
  );
};

const Navbar: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      className={cn([
        "h-[75px] w-full bg-white py-2 px-5 flex items-center justify-between",
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

      <h1 className="text-primary">
        {pathname === "/edit-portfolio" ? "Edit Portfolio" : "My Portfolio"}
      </h1>
      <Profile />
    </nav>
  );
};

export default Navbar;
