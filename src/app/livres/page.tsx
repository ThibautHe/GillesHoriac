"use client";
import { url } from "inspector";
import { Lora } from "next/font/google";
import Image from "next/image";
import Book from "../_components/bookspage/book";
import { useState } from "react";
import { Books, Category } from "../_constants/Constants";

// Import fonts
const lora = Lora({ subsets: ["latin"], weight: "400" });
const LoraItalic = Lora({ subsets: ["latin"], weight: "400", style: "italic" });
const Lorabold = Lora({ subsets: ["latin"], weight: "700" });


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
      className={`cursor-pointer w-1/4 h-12 flex justify-center items-center content-center ${
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

  const books = Books;

  const filteredBooks = books.filter(
    (book) => book.category == category || category == Category.ALL
  );

  return (
    <div>
      <nav className="m-4">
        <div className="flex flex-col w-[90%] m-auto justify-evenly">
          <h1 className={`${LoraItalic.className} text-4xl `}>Mes Romans</h1>
          <ul className="flex my-4 md:gap-8 justify-center items-center">
            <LiCard
              title="Tous"
              SelectedCategory={category}
              category={Category.ALL}
              callback={setCategory}
            ></LiCard>
            <LiCard
              title="Thriller / Polar"
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
      <div className="flex flex-col mt-12">
        {filteredBooks.map((book, index) => (
          <Book key={book.title} book={book} index={index}></Book>
        ))}
      </div>
    </div>
  );
}
