import Image from "next/image";
import AnimIcon from "./AnimIcon";
import Title from "./Title";

export default function ClassSection() {
  return (
    <div className="p-4 mt-10 lg:p-24" id="Animations">
      <Title title="Un auteur dans votre classe ?"></Title>

      <div className="w-full m-auto mt-24 xl:mt-24">
        <div className=" flex flex-col items-start md:grid gap-8 md:grid-cols-2 lg:w-[80%] lg:h-[80%] justify-center m-auto ">
          <div className="row-start-1 col-start-1">
            <Image
              className="hidden xl:block"
              src="/ecole2.png"
              width={1000}
              height={1000}
              style={{ width: "100%" }}
              alt="photo a l'ecole"
            ></Image>
          </div>

          <div className="row-start-1 row-end-3 col-start-2 h-full m-auto md:min-w-[350px]">
            <Image
              className=" w-full h-full object-cover"
              src="/ecole1.png"
              width={1000}
              height={1000}
              style={{ width: "100%" }}
              alt="photo a l'ecole"
            ></Image>
          </div>

          <div
            className={`flex row-start-2 col-start-1 relative flex-col xl:flex-row gap-12 w-full xl:items-stretch text-sm h-full`}
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
          <div>
            {" "}
            <h1 className="text-xl">Contact : +32 479 77 91 05</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
