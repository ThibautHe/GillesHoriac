"use client";
import { url } from "inspector";
import { Lora } from "next/font/google";
import Image from "next/image";
import Book from "../_components/bookspage/book";
import { useState } from "react";

// Import fonts
const lora = Lora({ subsets: ["latin"], weight: "400" });
const LoraItalic = Lora({ subsets: ["latin"], weight: "400", style: "italic" });
const Lorabold = Lora({ subsets: ["latin"], weight: "700" });

enum Category {
  ALL = "all",
  ROMAN = "Roman",
  THRILLER = "Thriller",
  JEUNESSE = "Jeunesse",
}

const books = [
  {
    title: "la Teigne",
    category: Category.ROMAN,
    pic: "/Livres/la_teigne.jpeg",
    description:
      "Un immeuble sans âme à la sortie d’une ville de province, tel est le cadre de vie d’un petit monde paralysé par la peur que suscite Suzie dite « la teigne » : un couple d’homosexuels, une famille tranquille avec deux enfants de 10 et 7 ans, un petit trafiquant, une veuve déprimée, une jeune femme aux mœurs légères, tous vivent dans la crainte de subir les calomnies, les colères, les menaces et la haine de cette septuagénaire aigrie. « La teigne » met un point d’honneur à transformer la vie tranquille des cohabitants en un cauchemar permanent. Et ce n’est pas Gérald, son mari alcoolique, qui apaise les choses. Cette vie, Suzie ne l’aime pas. Alors, contre toute attente, elle décide de changer : elle veut « essayer la gentillesse ». Mais qu’est-elle prête à sacrifier pour découvrir la joie d’aimer ?",
    price: "10.00",
  },
  {
    title: "La peau de l'autre",
    category: Category.THRILLER,
    pic: "/Livres/la_peau_de_lautre.png",
    description:
      "Un oncle inconnu lègue à Nicolas Lurquin, un père de famille à la vie simple, une somme proche des 10 millions d'euros. Une aventure étrange débute alors, autour d'une usurpation d'identité soudaine et étrange ! Nicolas Lurquin mène la vie paisible d’un bon père de famille près de Bruxelles. Un jour, il reçoit l’e-mail d’un notaire de Montpellier l’invitant à l’ouverture du testament de son oncle Guillaume Faviau. Bien que ce nom lui soit parfaitement inconnu, il se rend dans le Languedoc, où le notaire lui apprend qu’il est l’unique héritier d’une somme avoisinant les 10 millions d’euros. Sa surprise est encore plus grande lorsqu’il s’aperçoit que sur sa carte d’identité, son nom a été remplacé par celui de Paul Faviau. Qui a falsifié ses papiers ? Comment ? Pourquoi ? Nicolas n’y comprend rien, mais sur le chemin du retour, l’euphorie d’être devenu richissime l’emporte sur sa perplexité. L’histoire pourrait être belle, sauf qu’à la porte de son domicile, personne ne le reconnaît. Sa femme et ses deux fils affirment ne l’avoir jamais vu. Pire : un homme, prétendant s’appeler Nicolas Lurquin, a pris sa place. Pour ses collègues et ses amis aussi, il est devenu un parfait étranger. Bien malgré lui, voilà Nicolas dans la peau de Paul Faviau, un inconnu qui s’avère être un redoutable tueur… Entre le thriller psychologique et le roman noir, La peau de l’autre vous fera douter de votre propre identité… Qui a falsifié les papiers de Nicolas ? Quelle est cette nouvelle identité ? Pourquoi est-il soudainement devenu un inconnu aux yeux de son entourage ? Plongez-vous dans un thriller psychologique déconcertant et empli de suspense !",
    price: "10.00",
  },
];
type LiCardProps = {
  title: string;
  SelectedCategory: string;
  category: Category;
  callback: (category: Category) => void;
};
const LiCard = ({
  title,
  SelectedCategory,
  category,
  callback,
}: LiCardProps) => {
  return (
    <li
      className={`cursor-pointer w-1/4 h-12 text-center content-center ${
        SelectedCategory == category && "bg-custom-black text-light"
      }`}
      onClick={() => callback(category)}
    >
      {title}
    </li>
  );
};

export default function BookPage() {
  const [category, setCategory] = useState(Category.ALL);

  const filteredBooks = books.filter(
    (book) => book.category == category || category == Category.ALL
  );

  return (
    <div>
      <nav className="m-4">
        <div className="flex flex-col  justify-evenly">
          <h1 className={`${LoraItalic.className} text-4xl`}>Mes Romans</h1>
          <ul className="flex my-4 md:gap-8 justify-center items-center">
            <LiCard
              title="tous"
              SelectedCategory={category}
              category={Category.ALL}
              callback={setCategory}
            ></LiCard>
            <LiCard
              title="Thriller"
              SelectedCategory={category}
              category={Category.THRILLER}
              callback={setCategory}
            ></LiCard>
            <LiCard
              title="Romans"
              SelectedCategory={category}
              category={Category.ROMAN}
              callback={setCategory}
            ></LiCard>
            <LiCard
              title="Jeunesse"
              SelectedCategory={category}
              category={Category.JEUNESSE}
              callback={setCategory}
            ></LiCard>
          </ul>
        </div>
        <span className="block w-1/3 m-auto mt-10 bg-slate-500 min-h-px"></span>
      </nav>
      <div className="flex flex-col gap-12 mt-12">
        {filteredBooks.map((book, index) => (
          <Book key={book.title} book={book} index={index}></Book>
        ))}
      </div>
    </div>
  );
}
