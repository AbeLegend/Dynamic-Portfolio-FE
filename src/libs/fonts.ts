import { Inter, Public_Sans, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const publicSans = Public_Sans({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] });

export { inter, publicSans, poppins };