import Image from "next/image";

type AnimIconProps = {
  url: string;
  description: string;
};

export default function AnimIcon({ url, description }: AnimIconProps) {
  return (
    <div className="flex xl:flex-col justify-start items-center  text-start xl:w-3/4 gap-8 border-black xl:border-b-2 pb-8">
      <div className="">
        <Image alt="icon" src={url} width={100} height={100} />
      </div>
      <p className="flex items-center xl:items-start">{description}</p>
    </div>
  );
}
