"use client";

// lib
import { FC, useEffect, useState } from "react";
import { client, imageUrl } from "@/services/sanity";
import { base64StringToBlob } from "blob-util";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

// local
import { Button, ErrorText, Input, Textarea } from "@/components/atoms";
import { Card, ImageUploader } from "@/components/molecules";
import { HomePage } from "@/containers/";
import { cn } from "@/libs/utils";
import {
  PortfolioInitialValue,
  PortfolioType,
  initialListPortfolio,
} from "@/types/portfolio-type";
import { portfolioValidationSchema } from "@/libs/schema";
import { usePortfolioContext } from "@/context";
import { Footer, Navbar } from "@/components/templates";

const EditPortfolioPage: FC = () => {
  // useState
  const [data, setData] = useState<PortfolioType>(PortfolioInitialValue);
  const [base64Image, setBase64Image] = useState<string>("");
  const [base64ImageCover, setBase64ImageCover] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // useContext
  const { setName, setImage, setIsEdited, setLoading, loading } =
    usePortfolioContext();

  // function
  const loadFirst = async (isFinishUpload: boolean) => {
    setIsLoading(true);
    try {
      const res = await client.fetch<PortfolioType>(
        `*[_type == "portfolio"][0]`
      );
      if (isFinishUpload) {
        setData(form.values);
        setName(form.values.name);
        setImage(imageUrl(form.values.image).url());
      } else {
        setData(res);
        setName(res.name);
        setImage(imageUrl(res.image).url());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useFormik
  const form = useFormik({
    initialValues: data,
    enableReinitialize: true,
    validationSchema: portfolioValidationSchema,
    onSubmit: async (e) => {
      setLoading(true);
      // Upload
      await client
        .createOrReplace(e, { autoGenerateArrayKeys: true })
        .then((res) => {
          loadFirst(true);
          setBase64Image("");
          setBase64ImageCover("");
        })
        .catch((err) => {
          console.log({ err });
        });
      setLoading(false);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  // useEffect
  useEffect(() => {
    loadFirst(false);
  }, []);
  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(form.values)) {
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }
  }, [form]);

  return (
    <main className={isLoading ? "max-h-screen overflow-hidden" : ""}>
      {loading && (
        <div className="bg-black/50 absolute inset-0 z-50 flex   justify-center items-center">
          <div className="rounded-full border-4 border-neutral-200 border-t-neutral-500 animate-spin w-8 h-8" />
        </div>
      )}
      <Navbar />
      <form
        className={cn([
          "px-1 grid grid-cols-12",
          "tablet:px-5",
          "laptop:gap-x-[45px]",
        ])}
        onSubmit={form.handleSubmit}
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
              type="button"
              icon="plus"
              iconSize={20}
              iconColor="#10A4B0"
              className="pt-[10px] px-[21px]"
              buttonType="outline"
              onClick={() =>
                form.setFieldValue("portfolio", [
                  ...form.values.portfolio,
                  initialListPortfolio,
                ])
              }
            >
              Add Portfolio
            </Button>
            <Button
              type="submit"
              className="text-secondary"
              disabled={
                JSON.stringify(form.errors) === "{}" &&
                JSON.stringify(data) === JSON.stringify(form.values)
              }
            >
              Simpan Perubahan
            </Button>
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
              <ImageUploader
                onImageUpload={async (item) => {
                  let imageSplit = item.split(",")[1];
                  const image = base64StringToBlob(imageSplit);
                  const { _id: imageId } = await client.assets.upload(
                    "image",
                    image
                  );
                  form.setFieldValue(`imageCover.asset._ref`, imageId);
                  setBase64ImageCover(item);
                }}
              />
            </Card>
            <Card title="Profile Image">
              <ImageUploader
                onImageUpload={async (item) => {
                  let imageSplit = item.split(",")[1];
                  const image = base64StringToBlob(imageSplit);
                  const { _id: imageId } = await client.assets.upload(
                    "image",
                    image
                  );
                  form.setFieldValue(`image.asset._ref`, imageId);
                  setBase64Image(item);
                }}
              />
            </Card>
            <Card title="Profile" childrenClassName="grid gap-y-6">
              <Input
                type="text"
                placeholder="Nama"
                id="name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
              />
              {form.errors.name && <ErrorText value={form.errors.name} />}
              <Input
                type="text"
                placeholder="Title / Posisi"
                id="title"
                name="title"
                value={form.values.title}
                onChange={form.handleChange}
              />
              {form.errors.title && <ErrorText value={form.errors.title} />}
              <Textarea
                placeholder="Deskripsi"
                id="description"
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
              />
              {form.errors.description && (
                <ErrorText value={form.errors.description} />
              )}
            </Card>
            {form.values.portfolio.length > 0 &&
              form.values.portfolio.map((item, index) => {
                return (
                  <Card
                    title={`Portfolio ${index + 1}`}
                    childrenClassName="grid grid-cols-12 gap-y-6 gap-x-[14px]"
                    key={index}
                    isPortfolio
                    handleClose={() =>
                      form.setFieldValue("portfolio", [
                        ...form.values.portfolio.slice(0, index),
                        ...form.values.portfolio.slice(index + 1),
                      ])
                    }
                  >
                    <Input
                      type="text"
                      placeholder="Posisi"
                      className={cn(["col-span-12", "laptop:col-span-8"])}
                      id={`portfolio.${index}.position`}
                      name={`portfolio.${index}.position`}
                      value={item.position}
                      onChange={form.handleChange}
                    />
                    <Input
                      type="text"
                      placeholder="Perusahaan"
                      className={cn(["col-span-12", "laptop:col-span-8"])}
                      id={`portfolio.${index}.company`}
                      name={`portfolio.${index}.company`}
                      value={item.company}
                      onChange={form.handleChange}
                    />
                    <div
                      className={cn([
                        "col-span-12",
                        "laptop:col-span-4 laptop:col-start-1",
                      ])}
                    >
                      <DatePicker
                        id={`portfolio.${index}.startDate`}
                        name={`portfolio.${index}.startDate`}
                        selected={item.startDate && new Date(item.startDate)}
                        onChange={(e) => {
                          if (e) {
                            const date = format(e, "yyyy-MM-dd");
                            form.setFieldValue(
                              `portfolio.${index}.startDate`,
                              date
                            );
                          }
                        }}
                        className={cn([
                          "py-4 px-3 border border-gray-100/30 rounded-lg focus:outline-none placeholder:underline placeholder:text-gray-100 w-full",
                        ])}
                        wrapperClassName="rounded-lg w-full"
                        placeholderText="Tanggal Mulai"
                        dateFormat="d-M-y"
                      />
                    </div>
                    <div className={cn(["col-span-12", "laptop:col-span-4"])}>
                      <DatePicker
                        id={`portfolio.${index}.endDate`}
                        name={`portfolio.${index}.endDate`}
                        selected={item.endDate && new Date(item.endDate)}
                        onChange={(e) => {
                          if (e) {
                            const date = format(e, "yyyy-MM-dd");
                            form.setFieldValue(
                              `portfolio.${index}.endDate`,
                              date
                            );
                          }
                        }}
                        className={cn([
                          "py-4 px-3 border border-gray-100/30 rounded-lg focus:outline-none placeholder:underline placeholder:text-gray-100 w-full",
                        ])}
                        wrapperClassName="rounded-lg w-full"
                        placeholderText="Tanggal Selesai"
                        dateFormat="d-M-y"
                      />
                    </div>

                    <Textarea
                      placeholder="Description"
                      className={cn(["col-span-12", "laptop:col-span-8"])}
                      id={`portfolio.${index}.description`}
                      name={`portfolio.${index}.description`}
                      value={item.description}
                      onChange={form.handleChange}
                    />
                  </Card>
                );
              })}
          </div>
          {/* END: Form */}
        </div>
        <div className={cn(["col-span-12", "laptop:col-span-5"])}>
          {form.values !== PortfolioInitialValue && (
            <HomePage
              isPreview={true}
              data={form.values}
              isLoading={isLoading}
              base64Image={base64Image}
              base64ImageCover={base64ImageCover}
            />
          )}
        </div>
      </form>
      <Footer />
    </main>
  );
};

export default EditPortfolioPage;
