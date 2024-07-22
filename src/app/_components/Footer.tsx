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
        <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className={`${LoraItalic.className} text-5xl`}>Gilles Horiac</h1>
          <a href="mailto:herve_jacque@hotmail.com">herve_jacque@hotmail.com</a>
          <a href="tel:+32479779105">+32 479 77 91 05</a>
          <a target="_blank" href="https://www.facebook.com/GillesHoriacAuteur">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#F4E8CB"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </a>
        </div>
        <div className="hidden md:flex flex-col gap-14 text-3xl justify-center">
          <a href="/#Accueil">Accueil</a>
          <Link href="/livres">Livres</Link>
          <a href="/#Animations">Animations</a>
        </div>
      </div>
    </div>
  );
}
