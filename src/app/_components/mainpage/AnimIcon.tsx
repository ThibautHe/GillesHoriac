import Image from "next/image";

type AnimIconProps = {
  url: string;
  description:string
};

export default function AnimIcon({ url,description }: AnimIconProps) {

    return (
        <div className="flex xl:flex-col justify-start items-start text-start xl:w-1/3 gap-8">
              <Image
                alt="icon"
                src={url}
                width={100}
                height={100}
              ></Image>
              <h1>
                {description}
              </h1>
            </div>
    )
}
