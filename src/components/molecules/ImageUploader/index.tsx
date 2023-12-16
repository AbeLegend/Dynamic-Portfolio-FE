// lib
import React, { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// local
import { poppins } from "@/libs/fonts";

interface ImageUploaderProps {
  onImageUpload: (base64: string) => void;
}

const AttachmentIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.65543 11.5C4.12209 11.5 2.82209 10.9667 1.75543 9.9C0.688759 8.83333 0.155426 7.53333 0.155426 6C0.155426 4.46667 0.688759 3.16667 1.75543 2.1C2.82209 1.03333 4.12209 0.5 5.65543 0.5H16.1554C17.2554 0.5 18.1971 0.891667 18.9804 1.675C19.7638 2.45833 20.1554 3.4 20.1554 4.5C20.1554 5.6 19.7638 6.54167 18.9804 7.325C18.1971 8.10833 17.2554 8.5 16.1554 8.5H6.65543C5.95543 8.5 5.36376 8.25833 4.88043 7.775C4.39709 7.29167 4.15543 6.7 4.15543 6C4.15543 5.3 4.39709 4.70833 4.88043 4.225C5.36376 3.74167 5.95543 3.5 6.65543 3.5H15.4054C15.6221 3.5 15.8013 3.57083 15.9429 3.7125C16.0846 3.85417 16.1554 4.03333 16.1554 4.25C16.1554 4.46667 16.0846 4.64583 15.9429 4.7875C15.8013 4.92917 15.6221 5 15.4054 5H6.65543C6.37209 5 6.13459 5.09583 5.94293 5.2875C5.75126 5.47917 5.65543 5.71667 5.65543 6C5.65543 6.28333 5.75126 6.52083 5.94293 6.7125C6.13459 6.90417 6.37209 7 6.65543 7H16.1554C16.8554 7 17.4471 6.75833 17.9304 6.275C18.4138 5.79167 18.6554 5.2 18.6554 4.5C18.6554 3.8 18.4138 3.20833 17.9304 2.725C17.4471 2.24167 16.8554 2 16.1554 2H5.65543C4.55543 2 3.61376 2.39167 2.83043 3.175C2.04709 3.95833 1.65543 4.9 1.65543 6C1.65543 7.1 2.04709 8.04167 2.83043 8.825C3.61376 9.60833 4.55543 10 5.65543 10H15.4054C15.6221 10 15.8013 10.0708 15.9429 10.2125C16.0846 10.3542 16.1554 10.5333 16.1554 10.75C16.1554 10.9667 16.0846 11.1458 15.9429 11.2875C15.8013 11.4292 15.6221 11.5 15.4054 11.5H5.65543Z"
        fill="#717984"
      />
    </svg>
  );
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = reader.result as string;
          setImagePreview(base64String);
          onImageUpload(base64String);
        };

        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: "image/jpeg, image/png" ,
    multiple: false,
  });

  return (
    <div className="">
      <div
        {...getRootProps()}
        className="rounded-lg py-[71px] cursor-pointer bg-[#EBEBEB] w-full text-center underline"
      >
        <input {...getInputProps()} />
        <AttachmentIcon className="mx-auto mb-2" />
        <h4 className={`${poppins.className} text-gray-100 `}>
          Drag and drop files, or <span className="text-primary">Browse</span>
        </h4>
        <p className="text-body text-gray-300">
          Support formats : png, jpg, jpeg, mp4.
        </p>
        <p className="text-body text-gray-300">Max size : 500Mb</p>
      </div>
    </div>
  );
};

export default ImageUploader;
