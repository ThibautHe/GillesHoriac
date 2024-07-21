import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
    url: string;
    id:string
  };
  index: number;
};

export default function Book({ book, index }: BookProps) {
  return (
    <div
    id={book.id}
      className={`flex relative items-center min-h-[80vh] py-12  ${
        index % 2 ? "bg-custom-black text-light" : ""
      } `}
    >
      <div className="flex flex-col xl:flex-row justify-center items-center md:p-4 gap-10 min-h-[75vh]">
        <div className="w-fit h-fit relative">
          <Image
            className="w-[300px] md:w-[400px]"
            src={book.pic}
            width={500}
            height={500}
            alt="book la teigne"
          ></Image>
          <div className="hidden absolute w-full mt-4 h-12 z-50">
            <span
              className={`${
                index % 2 ? "bg-custom-light" : "bg-custom-black"
              } w-full h-px block`}
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
            <p className="text-2xl">Prix : {book.price}€</p>
            <Link target="_blank" href={book.url}>
              <button
                className={`px-8 py-4 ${Lorabold.className} ${
                  index % 2
                    ? "bg-custom-light text-black"
                    : "bg-custom-black text-light"
                } rounded-2xl`}
              >
                Acheter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
