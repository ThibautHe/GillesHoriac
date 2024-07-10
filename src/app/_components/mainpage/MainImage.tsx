import Image from "next/image";

export default function MainImage() {
  return (
    <>
      <Image
        id="Accueil"
        className="relative object-cover object-top"
        src="/Convention.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        alt="image of author"
      ></Image>
    </>
  );
}
