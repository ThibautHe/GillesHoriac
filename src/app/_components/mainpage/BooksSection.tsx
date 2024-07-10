import Image from "next/image";
import { LibreFranklin, LoraRegular } from "../../layout";
import Title from "./Title";

export default function BooksSection() {
  return (
    <>
      <div className="pt-10 px-4 lg:p-24 overflow-hidden">
        <Title title="Ses Ouvrages"></Title>

        <div className=" mt-9 lg:mt-32 mb-24 flex flex-col items-center text-justify lg:flex-row lg:items-start lg:text-start justify-center gap-16">
          <div className="relative w-full md:w-1/4">
            <Image
              src={"/Livres/la_peau_de_lautre.png"}
              width={500}
              height={0}
              style={{ width: "100%" }}
              alt="book La peau de l'autre"
            ></Image>
            <div className="bg-slate-500 w-[40rem] h-[40rem] absolute -top-9 -left-56 -z-10 rounded-[100%] bg-img"></div>
          </div>
          <p className={` relative md:w-1/2 ${LibreFranklin.className}`}>
            Un oncle inconnu lègue à Nicolas Lurquin, un père de famille à la
            vie simple, une somme proche des 10 millions d'euros. Une aventure
            étrange débute alors, autour d'une usurpation d'identité soudaine et
            étrange ! Nicolas Lurquin mène la vie paisible d’un bon père de
            famille près de Bruxelles. Un jour, il reçoit l’e-mail d’un notaire
            de Montpellier l’invitant à l’ouverture du testament de son oncle
            Guillaume Faviau. Bien que ce nom lui soit parfaitement inconnu, il
            se rend dans le Languedoc, où le notaire lui apprend qu’il est
            l’unique héritier d’une somme avoisinant les 10 millions d’euros. Sa
            surprise est encore plus grande lorsqu’il s’aperçoit que sur sa
            carte d’identité, son nom a été remplacé par celui de Paul Faviau.
            Qui a falsifié ses papiers ? Comment ? Pourquoi ? Nicolas n’y
            comprend rien, mais sur le chemin du retour, l’euphorie d’être
            devenu richissime l’emporte sur sa perplexité. L’histoire pourrait
            être belle, sauf qu’à la porte de son domicile, personne ne le
            reconnaît. Sa femme et ses deux fils affirment ne l’avoir jamais vu.
            Pire : un homme, prétendant s’appeler Nicolas Lurquin, a pris sa
            place. Pour ses collègues et ses amis aussi, il est devenu un
            parfait étranger. Bien malgré lui, voilà Nicolas dans la peau de
            Paul Faviau, un inconnu qui s’avère être un redoutable tueur… Entre
            le thriller psychologique et le roman noir, La peau de l’autre vous
            fera douter de votre propre identité… Qui a falsifié les papiers de
            Nicolas ? Quelle est cette nouvelle identité ? Pourquoi est-il
            soudainement devenu un inconnu aux yeux de son entourage ?
            Plongez-vous dans un thriller psychologique déconcertant et empli de
            suspense !
          </p>
        </div>
      </div>
    </>
  );
}
