import { ImageType } from "./base-type";

interface ListPortfolioType {
  _type: string,
  position: string,
  company: string,
  description: string,
  startDate: Date | null,
  endDate: Date | null,
}

interface PortfolioType {
  _id: string,
  _type: string,
  name: string,
  portfolio: Array<ListPortfolioType>
  description: string,
  title: string,
  image: ImageType,
  imageCover: ImageType
}

const initialListPortfolio: ListPortfolioType = {
  _type: "portfolioItem",
  company: "",
  description: "",
  endDate: null,
  position: "",
  startDate: null

};

const PortfolioInitialValue: PortfolioType = {
  _id: "",
  _type: "portfolio",
  name: "",
  portfolio: [],
  description: "",
  title: "",
  image: {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: "",
    },
  },
  imageCover: {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: "",
    },
  },
};


export { PortfolioInitialValue, initialListPortfolio };
export type { PortfolioType, ListPortfolioType };
