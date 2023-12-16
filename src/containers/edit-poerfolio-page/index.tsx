"use client";

// lib
import { FC } from "react";
// local
import { Button, Input, Textarea } from "@/components/atoms";
import { Card, ImageUploader } from "@/components/molecules";
import { HomePage } from "@/containers/";

const EditPortfolioPage: FC = () => {
  return (
    <main className="grid grid-cols-12 gap-x-[45px] px-5">
      <div className="col-span-12">
        {/* BEGIN: Button */}
        <div className="col-span-7 flex items-center gap-x-4 my-[33px]">
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
      <div className="col-span-7 grid grid-cols-7">
        {/* BEGIN: Form */}
        <div className="col-span-7 grid gap-y-6">
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
                  isLastIndex={Array(3).length === index + 1}
                >
                  <Input placeholder="Nama" className="col-span-8" />
                  <Input placeholder="Posisi" className="col-span-8" />
                  <Input placeholder="Perusahaan" className="col-span-8" />
                  <Input
                    placeholder="Tanggal Mulai"
                    className="col-span-4 col-start-1"
                  />
                  <Input placeholder="Tanggal Selesai" className="col-span-4" />
                  <Textarea placeholder="Description" className="col-span-8" />
                </Card>
              );
            })}
        </div>
        {/* END: Form */}
      </div>
      <div className="col-span-5">
        <HomePage isPreview />
      </div>
    </main>
  );
};

export default EditPortfolioPage;
