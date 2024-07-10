import Image from "next/image";
import Title from "./Title";


export default function Author() {
  return (
    <div className="relative mt-8 pb-8 md:pb-24">
      <div className="absolute top-0 h-full w-full bg-img -z-10 rounded-tr-full" />
      <div className=" p-4 md:p-24">
        <Title title="L'auteur"></Title>
      </div>
      <div className="flex flex-col-reverse items-center xl:flex-row justify-center gap-8 px-4">
        <p
          className={`xl:w-1/4 w-full text-justify `}
        >
          Après avoir enseigné le français pendant 35 ans dans plusieurs écoles
          de Bruxelles, Gilles HORIAC se consacre exclusivement à l’écriture.
          C’est en 2008 que sort son premier roman (PLEINE LUNE, aux éditions
          DRICOT). Son premier succès littéraire, il le recueille en 2012, avec
          SA MAJESTE LEA, un roman qui aborde le thème de l’Enfant-Roi, vendu à
          plus de 13000 exemplaires et recommandé dans de nombreuses écoles en
          Wallonie et à Bruxelles. A celui-ci viendront s’ajouter, entre autres,
          IL N’Y A PLUS DE VIEILLESSE ! (2014), ROSES MORTELLES (2017), LA PEAU
          DE L’AUTRE (2019), un polar salué par la presse radiophonique et
          télévisée, et finaliste du grand prix littéraire de la SABAM. En 2020
          sort LA FORET DES MIROIRS, un roman jeunesse sur la futilité du «
          paraître ». Tous ces romans sont publiés chez 180°éditions. Depuis
          2017, Gilles HORIAC est reconnu par l’AEB (Association des Ecrivains
          Belges de langue française).
        </p>
        <div>
          <Image
            className=""
            src="/author.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
