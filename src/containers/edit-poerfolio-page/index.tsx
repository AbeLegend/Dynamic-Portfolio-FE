"use client";

// lib
import { FC } from "react";
// local
import { Button, Input, Textarea } from "@/components/atoms";
import { Card, ImageUploader } from "@/components/molecules";
import { HomePage } from "@/containers/";
import { cn } from "@/libs/utils";

const EditPortfolioPage: FC = () => {
  return (
    <main
      className={cn([
        "px-1 grid grid-cols-12",
        "tablet:px-5",
        "laptop:gap-x-[45px]",
      ])}
    >
      <div className="col-span-12 w-fit">
        {/* BEGIN: Button */}
        <div
          className={cn([
            "flex flex-col gap-y-4 my-5",
            "tablet:flex-row tablet:items-center tablet:gap-x-4 tablet:my-[33px]",
            "",
          ])}
        >
          <Button
            icon="plus"
            iconSize={20}
            iconColor="#10A4B0"
            className="pt-[10px] px-[21px]"
            buttonType="outline"
          >
            Add Portfolio
          </Button>
          <Button disabled={true}>Simpan Perubahan</Button>
        </div>
        {/* END: Button */}
      </div>
      <div
        className={cn([
          "col-span-12 grid grid-cols-12",
          "laptop:col-span-7 laptop:grid-cols-7",
        ])}
      >
        {/* BEGIN: Form */}
        <div
          className={cn(["col-span-12", "grid gap-y-6", "laptop:col-span-7"])}
        >
          <Card title="Backgound Image">
            <ImageUploader onImageUpload={() => {}} />
          </Card>
          <Card title="Profile Image">
            <ImageUploader onImageUpload={() => {}} />
          </Card>
          <Card title="Profile" childrenClassName="grid gap-y-6">
            <Input placeholder="Nama" />
            <Input placeholder="Title / Posisi" />
            <Textarea placeholder="Deskripsi" />
          </Card>
          {Array(3)
            .fill(null)
            .map((item, index) => {
              return (
                <Card
                  title={`Portfolio ${index + 1}`}
                  childrenClassName="grid grid-cols-12 gap-y-6 gap-x-[14px]"
                  key={index}
                  isPortfolio
                >
                  <Input
                    placeholder="Nama"
                    className={cn(["col-span-12", "laptop:col-span-8"])}
                  />
                  <Input
                    placeholder="Posisi"
                    className={cn(["col-span-12", "laptop:col-span-8"])}
                  />
                  <Input
                    placeholder="Perusahaan"
                    className={cn(["col-span-12", "laptop:col-span-8"])}
                  />
                  <Input
                    placeholder="Tanggal Mulai"
                    className={cn([
                      "col-span-12",
                      "laptop:col-span-4 laptop:col-start-1",
                    ])}
                  />
                  <Input
                    placeholder="Tanggal Selesai"
                    className={cn(["col-span-12", "laptop:col-span-4"])}
                  />
                  <Textarea
                    placeholder="Description"
                    className={cn(["col-span-12", "laptop:col-span-8"])}
                  />
                </Card>
              );
            })}
        </div>
        {/* END: Form */}
      </div>
      <div className={cn(["col-span-12", "laptop:col-span-5"])}>
        <HomePage isPreview />
      </div>
    </main>
  );
};

export default EditPortfolioPage;
