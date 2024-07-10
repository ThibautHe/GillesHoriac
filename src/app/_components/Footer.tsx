import Link from "next/link";
import { Lora } from "next/font/google";

const LoraItalic = Lora({
  style: ["italic"],
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div id="Contact" className="bg-custom-black relative">
      <div className="w-full flex justify-center">
        <span className=" absolute top-10 block w-3/4 h-px bg-custom-light"></span>
      </div>

      <div className=" flex justify-evenly h-[450px] items-center text-light font-normal">
        <div className="flex flex-col gap-16 items-center justify-center">
          <h1 className={`${LoraItalic.className} text-5xl`}>Gilles Horiac</h1>
          <a href="mailto:herve_jacque@hotmail.com">herve_jacque@hotmail.com</a>
          <a href="tel:0479779105">0479779105</a>
        </div>
        <div className="hidden md:flex flex-col gap-14 text-3xl justify-center">
          <a href="/#Accueil">Accueil</a>
          <Link href="/livres">Livres</Link>
          <a href="/#Animation">Animations</a>
        </div>
      </div>
    </div>
  );
}
