import { Lora } from "next/font/google";

const LoraRegular = Lora({
  weight: ["400"],
  subsets: ["latin"],
});

type TitleProps = {
  title: string;
};
export default function Title({ title }: TitleProps) {
  return (
    <h1 className={`${LoraRegular.className} block w-fit relative text-4xl`}>
      {title}
      <span className=" xl:ml-[70%] mt-4 border-b-2 border-black block w-52 h-1"></span>
    </h1>
  );
}
