import * as Yup from "yup";

const listPortfolioValidationSchema = Yup.object().shape({
  _type: Yup.string().required("Type is required"),
  position: Yup.string().required("Posisi is required"),
  company: Yup.string().required("Perusahaan is required"),
  description: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Tanggal mulai is required"),
  endDate: Yup.date().required("Tanggal selesai is required"),
});

const imageAssetValidationSchema = Yup.object().shape({
  _type: Yup.string(),
  _ref: Yup.string(),
});

const imageValidationSchema = Yup.object().shape({
  _type: Yup.string(),
  asset: imageAssetValidationSchema,
});

const portfolioValidationSchema = Yup.object().shape({
  _id: Yup.string(),
  _type: Yup.string().required("Type is required"),
  name: Yup.string().required("Nama is required"),
  portfolio: Yup.array().nullable().of(listPortfolioValidationSchema),
  description: Yup.string().required("Deskripsi is required"),
  title: Yup.string().required("Title / Posisi is required"),
  image: imageValidationSchema,
  imageCover: imageValidationSchema,
});


export { portfolioValidationSchema }