import Image from "next/image";
import Title from "./Title";
import { Libre_Franklin } from "next/font/google";
import Link from "next/link";

const libre = Libre_Franklin({ subsets: ["latin"], weight: "400" });

export default function BooksSection() {
  return (
    <>
      <div className="pt-10 px-4 lg:p-24 overflow-hidden">
        <Title title="Ses Ouvrages"></Title>

        <div className="mt-9 lg:mt-32 mb-12 md:w-2/3 m-auto grid grid-cols-2 items-center text-justify lg:items-start lg:text-start justify-center gap-4 md:gap-16">
          <div className="relative ">
            <Link href={"/livres/#peau"}>
              <Image
                className="h-full w-full object-contain"
                src={"/Livres/la_peau_de_lautre.png"}
                width={1080}
                height={1080}
                style={{ width: "100%" }}
                alt="book La peau de l'autre"
              ></Image>
            </Link>
            <div className="bg-slate-500 w-[40rem] h-[40rem] absolute -top-9 -left-56 -z-10 rounded-[100%] bg-img"></div>
          </div>
          <div className="grid grid-cols-2 gap-1 h-full">
            <div className=" w-full h-full">
              <Link href={"/livres/#vieillesse"}>
                <Image
                  className="h-full w-full object-cover"
                  src={"/Livres/il_ny_a_plus_de_vieillesse.jpg"}
                  width={1080}
                  height={1080}
                  alt="book La peau de l'autre"
                ></Image>
              </Link>
            </div>
            <div className="w-full h-full">
              <Link href={"/livres/#je"}>
                <Image
                  className="h-full w-full object-cover"
                  src={"/Livres/je_viendrais_te_chercher.jpg"}
                  width={1080}
                  height={1080}
                  alt="book La peau de l'autre"
                ></Image>
              </Link>
            </div>

            <div className="w-full h-full">
              <Link href={"/livres/#teigne"}>
                <Image
                  className="h-full w-full object-cover"
                  src={"/Livres/la_teigne.jpeg"}
                  width={1080}
                  height={1080}
                  alt="book La peau de l'autre"
                ></Image>
              </Link>
            </div>
            <div className="w-full h-full">
              <Link href={"/livres/#lea"}>
                <Image
                  className="h-full w-full object-cover"
                  src={"/Livres/sa_majeste_lea.jpg"}
                  width={1080}
                  height={1080}
                  alt="book La peau de l'autre"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
