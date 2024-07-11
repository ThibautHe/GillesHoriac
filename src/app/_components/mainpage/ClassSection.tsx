import Image from "next/image";
import AnimIcon from "./AnimIcon";
import Title from "./Title";

export default function ClassSection() {
  return (
    <div className="p-4 mt-10 md:p-24" id="Animations">
      <Title title="Un auteur dans votre classe ?"></Title>

      <div className="w-full m-auto mt-10 xl:mt-24">
        <div className=" flex flex-col items-start md:grid gap-8 md:grid-cols-2 w-full h-full ">
          <Image
            className="hidden xl:block"
            src="/ecole2.png"
            width={1000}
            height={1000}
            style={{ width: "100%" }}
            alt="photo a l'ecole"
          ></Image>


          <Image
            className="row-span-2 w-3/4"
            src="/ecole1.png"
            width={1000}
            height={1000}
            style={{ width: "100%" }}
            alt="photo a l'ecole"
            ></Image>


          <div
            className={`flex relative flex-col xl:flex-row gap-12 w-full items-center xl:items-stretch text-sm h-full`}
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
