import Image from "next/image";
import { LibreFranklin, LoraRegular } from "../../layout";
import AnimIcon from "./AnimIcon";
import Title from "./Title";

export default function ClassSection() {
  return (
    <div className="p-4 mt-10 md:p-10 lg:p-24" id="Animations">
      <Title title="Un auteur dans votre classe ?"></Title>

      <div className="w-full lg:w-3/4 m-auto mt-10 xl:mt-24">
        <div className=" flex flex-col items-center md:grid gap-16 md:grid-cols-2 w-full h-full ">
          <Image
            className="hidden xl:block"
            src="/ecole2.png"
            width={1000}
            height={1000}
            style={{ width: "100%" }}
            alt="photo a l'ecole"
          ></Image>
          <Image
            className="row-span-2"
            src="/ecole1.png"
            width={1000}
            height={1000}
            style={{ width: "90%" }}
            alt="photo a l'ecole"
          ></Image>

          <div
            className={`flex flex-col xl:flex-row gap-12 items-center xl:items-start ${LibreFranklin.className} text-sm`}
          >
            <AnimIcon
              url="/icon1.png"
              description="Débat sur un des thèmes abordés dans le livre"
            ></AnimIcon>
            <AnimIcon
              url="/icon2.png"
              description="Interview de l'auteur au sujet du roman et du métier d'écrivain."
            ></AnimIcon>
            <AnimIcon
              url="/icon3.png"
              description="Mini atelier d'écriture À partir d'une situation évoquée dans le roman, les élèves, avec l'aide de l'auteur, imaginent une suite différente de celle qu'ils ont lue."
            ></AnimIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
