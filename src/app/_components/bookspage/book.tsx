import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({ subsets: ["latin"], weight: "400" });
const LoraItalic = Lora({ subsets: ["latin"], weight: "400", style: "italic" });
const Lorabold = Lora({ subsets: ["latin"], weight: "700" });

type BookProps = {
  book: {
    title: string;
    category: string;
    pic: string;
    description: string;
    price: string;
  };
  index: number;
};

export default function Book({ book, index }: BookProps) {
  return (
    <div
      className={`flex relative items-center min-h-[80vh]  ${
        index % 2 ? "bg-custom-black text-light py-24" : ""
      } `}
    >
      <div className="flex flex-col xl:flex-row justify-center items-center md:p-4 lg:gap-24 xl:items-start">
        <div className="w-fit h-fit relative">
          <Image
            className="w-[300px] md:w-[400px]"
            src={book.pic}
            width={500}
            height={500}
            alt="book la teigne"
          ></Image>
          <div className="hidden md:block absolute -bottom-24 w-full h-12 z-50">
            <span
              className={`${
                index % 2 ? "bg-custom-light" : "bg-custom-black"
              } w-full h-px`}
            ></span>
            <span
              className={`${
                index % 2 ? "bg-custom-light" : "bg-custom-black"
              } w-full h-px block mt-6 -ml-8`}
            ></span>
            <span
              className={`${
                index % 2 ? "bg-custom-light" : "bg-custom-black"
              } w-full h-px block mt-6 -ml-16`}
            ></span>
          </div>
        </div>
        <div className="p-4 xl:w-1/3 flex flex-col justify-between gap-8">
          <h1 className={`${Lorabold.className} text-4xl`}>{book.title}</h1>
          <h2 className="text-2xl">Gilles Horiac</h2>
          <h3>Catégorie : {book.category}</h3>
          <p className={``}>{book.description}</p>
          <div className="flex justify-between">
            <p className="text-2xl">{book.price}€</p>
            <button
              className={`px-8 py-4 ${Lorabold.className} ${
                index % 2
                  ? "bg-custom-light text-black"
                  : "bg-custom-black text-light"
              } rounded-2xl`}
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
