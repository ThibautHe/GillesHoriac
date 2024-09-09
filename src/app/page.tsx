import Image from "next/image";
import MainImage from "./_components/mainpage/MainImage";
import BooksSection from "./_components/mainpage/BooksSection";
import BooksCarousel from "./_components/mainpage/BooksCarousel";
import ClassSection from "./_components/mainpage/ClassSection";
import Author from "./_components/mainpage/Author";
import Nav from "./_components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <MainImage></MainImage>
      <BooksSection></BooksSection>
      <div className="relative">
        <div className="bg-custom-black">
          <div className="bg-custom-black h-[400px] 2xl:w-4/5 mx-auto flex justify-center items-center relative overflow-hidden">
            <BooksCarousel></BooksCarousel>
          </div>
        </div>
        <div className="hidden xl:block w-[150px] h-[150px] absolute -bottom-[30%] left-1/4 rounded-full bg-custom-black" />
        <div className="hidden xl:block w-[100px] h-[100px] absolute -bottom-[30%] left-[33.5%] rounded-full bg-custom-black" />
        <div className="hidden xl:block w-[50px] h-[50px] absolute -bottom-[30%] left-[39.5%] rounded-full bg-custom-black" />
      </div>
      <Link
        className="text-black flex justify-center items-center mt-8 xl:mt-24 text-2xl underline w-fit m-auto"
        href={"/livres"}
      >
        Voir tout
      </Link>

      <ClassSection></ClassSection>
      <Author></Author>
    </div>
  );
}
