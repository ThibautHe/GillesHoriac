export enum Category {
  ALL = "all",
  ROMAN = "Roman",
  THRILLER = "Thriller / polar",
  JEUNESSE = "Jeunesse",
}

export const Books = [
  {
    id: "ange",
    title: "L'ange Catharsis",
    category: Category.ROMAN,
    pic: "/Livres/Catharsis.jpg",
    description:
      "Imaginez une pauvre masure isolée au milieu de nulle part. Y vivent un homme, son épouse et leurs deux adolescents qui, tous, souffrent de leur laideur et de leur apathie. À la maison, leur unique trésor est une toile représentant un ange d'une grande beauté.\n Un jour, les huissiers débarquent pour saisir leurs maigres biens... et le tableau de l'ange. Aussitôt, les quatre malheureux courent vainement derrière la camionnette qui emporte leur bien le plus précieux. Quand ils rentrent chez eux, l'ange représenté sur la toile est là. En chair et en os. \n Un roman surréaliste,étrange où la folie se nourrit de poésie, où l'inattendu imprègne lees rêves.",
    price: "15",
    url: "mailto:herve_jacque@hotmail.com",
    command: { mail: true },
  },
  {
    id: "teigne",
    title: "La Teigne",
    category: Category.ROMAN,
    pic: "/Livres/la_teigne.jpeg",
    description:
      "Un immeuble sans âme à la sortie d’une ville de province, tel est le cadre de vie d’un petit monde paralysé par la peur que suscite Suzie dite « la teigne » : un couple d’homosexuels, une famille tranquille avec deux enfants de 10 et 7 ans, un petit trafiquant, une veuve déprimée, une jeune femme aux mœurs légères, tous vivent dans la crainte de subir les calomnies, les colères, les menaces et la haine de cette septuagénaire aigrie. « La teigne » met un point d’honneur à transformer la vie tranquille des cohabitants en un cauchemar permanent. Et ce n’est pas Gérald, son mari alcoolique, qui apaise les choses. Cette vie, Suzie ne l’aime pas. Alors, contre toute attente, elle décide de changer : elle veut « essayer la gentillesse ». Mais qu’est-elle prête à sacrifier pour découvrir la joie d’aimer ?",
    price: "16.50",
    url: "https://www.le-lion-zaile.com/fr/accueil/169-la-teigne-9782390660194.html",
    command: { mail: false },
  },
  {
    id: "peau",
    title: "La peau de l'autre",
    category: Category.THRILLER,
    pic: "/Livres/la_peau_de_lautre.png",
    description: `Nicolas Lurquin mène la vie paisible d’un bon père de famille près de Bruxelles. Un jour, il reçoit l’e-mail d’un notaire de Montpellier l’invitant à l’ouverture du testament de son oncle Guillaume Faviau. Bien que ce nom lui soit parfaitement inconnu, il se rend dans le Languedoc, où le notaire lui apprend qu’il est l’unique héritier d’une somme avoisinant les 10 millions d’euros. Sa surprise est encore plus grande lorsqu’il s’aperçoit que sur sa carte d’identité, son nom a été remplacé par celui de Paul Faviau. Qui a falsifié ses papiers ? Comment ? Pourquoi ? Nicolas n’y comprend rien, mais sur le chemin du retour, l’euphorie d’être devenu richissime l’emporte sur sa perplexité. L’histoire pourrait être belle, sauf qu’à la porte de son domicile, personne ne le reconnaît. Sa femme et ses deux fils affirment ne l’avoir jamais vu. Pire : un homme, prétendant s’appeler Nicolas Lurquin, a pris sa place. Pour ses collègues et ses amis aussi, il est devenu un parfait étranger. Bien malgré lui, voilà Nicolas dans la peau de Paul Faviau, un inconnu qui s’avère être un redoutable tueur…
    \nEntre le thriller psychologique et le roman noir, La peau de l’autre vous fera douter de votre propre identité…`,
    price: "15.00",
    url: "mailto:herve_jacque@hotmail.com",
    command: { mail: true },
  },
  {
    id: "je",
    title: "Je viendrai te chercher",
    category: Category.THRILLER,
    pic: "/Livres/je_viendrais_te_chercher.jpg",
    description:
      "1978. Trois meurtres sont perpétrés à quelques heures d'intervalle dans une bourgade tranquille située dans l'Orne. Sur le front de chaque victime, le tueur a laissé un message énigmatique, écrit au rouge à lèvres. Fraîchement nommée commissaire, Noémie Leval se voit confrontée à la rage d'un tueur en série qui semble frapper au hasard de ses rencontres. Au hasard ? Pas si sûr... L'enquête qu'elle mène avec l'aide des inspecteurs Guérin et Closset va la conduire dans les ruines d'un ancien orphelinat, jusqu'aux portes de l'Enfer... Une enquête haletante, rythmée par les grands succès de la chanson de cette année-là.",
    price: "15.00",
    url: "mailto:herve_jacque@hotmail.com",
    command: { mail: true },
  },
  {
    id: "col",
    title: "Col blanc cassé",
    category: Category.ROMAN,
    pic: "/Livres/col_blanc_casse.jpg",
    description:
      "Claude de Lestienne est député, ancien ministre, riche, imbu de sa personne, plutôt antipathique. Un jour, quelques jeunes des beaux quartiers du Brabant Wallon échafaudent un chantage dans le but de lui soutirer de l'argent. Comme l'homme ne cède pas, le voilà accusé d'avoir eu un comportement déplacé envers une jeune fille mineure. Très vite, la rumeur enfle. Trop heureux de voir s'écraser un personnage illustre, la presse et les réseaux sociaux se déchainent. Quant à la juge en charge de l'affaire, elle projette sur le député une vieille rancoeur refoulée depuis l'enfance. Ce roman sombre évoque de nombreux thèmes actuels : la montée du populisme, la dérive des nouveaux médias, cette 'émocratie', qui consiste à juger selon ses émotions plus que dans le respect de la loi",
    price: "15.00",
    url: "mailto:herve_jacque@hotmail.com",
    command: { mail: true },
  },
  {
    id: "lutin",
    title: "Huit lutins",
    category: Category.JEUNESSE,
    pic: "/Livres/huit_lutins.jpeg",
    description:
      "1998 : Les vacances de Noël sont là. Le luxueux internat des Goélands se vide. Seuls huit enfants et deux éducateurs resteront dans l’établissement situé sur l’île de Ouedec. Au programme : jeux, balades, compétitions sportives, veillées. Mais dès la première nuit, des bruits étranges et une chanson lugubre résonnent au-dessus des têtes. Deux ados, Solène et Baptiste, se risquent à une exploration nocturne du grenier. Ils n’auraient pas dû… Le lendemain matin, une des pensionnaires a disparu. Un roman court et haletant, destiné aux jeunes avides de sensations fortes.",
    price: "10.00",
    url: "https://www.publier-un-livre.com/fr/le-livre-en-papier/2593-huit-lutins",
    command: { mail: false },
  },
  {
    id: "vieillesse",
    title: "Il n'y a plus de vieillesse",
    category: Category.ROMAN,
    pic: "/Livres/il_ny_a_plus_de_vieillesse.jpg",
    description:
      "Les Lilas Blancs, une maison de retraite. C'est là qu'Alain, Béatrice, Bernadette et Georges se rencontrent, et commencent véritablement leur vie. A 70 ans. Neutraliser un jeune délinquant dans les rues de Mons, inviter la reine Mathilde à signer une pétition à vocation humanitaire, entreprendre un raid clandestin pour sauver un site naturel, emmener des SDF dans un restaurant étoilé, enregistrer une chanson qui deviendra un tube mondial, démonter une émission télévisée truquée, organiser un mariage gay dans le parc de la résidence, … nos quatre héros n'ont plus une minute à perdre ! Il est bien fini, le temps où l'on infantilisait « les vieux » pour mieux les soumettre. Le printemps est la saison des révolutions. Et si, cette année, nous assistions au printemps des seniors ? Car, comme le fait remarquer Georges : « Mai 68, c'était déjà nous ! »",
    price: "15.00",
    url: "mailto:herve_jacque@hotmail.com",
    command: { mail: true },
  },
  {
    id: "lea",
    title: "Sa Majesté Léa ",
    category: Category.JEUNESSE,
    pic: "/Livres/sa_majeste_lea.jpg",
    description:
      "Spectatrice assidue du 'Tribunal des Kids', l'émission de télé-réalité qui offre aux enfants l'occasion d'intenter un procès plus vrai que nature à leurs parents, Léa, 14 ans, se transforme peu à peu en tyran vis-à-vis des adultes qui l'entourent, surtout ceux qui incarnent l'autorité. Aidée par nombre d'associations officielles à vocation prétendument pédagogique, elle parvient à faire arrêter son propre père et à faire interner sa mère. Léa se croit enfin libre... Mais bien malgré elle, la jeune fille devra passer ses vacances dans une ferme, terrée au fin fond de l'Ardèche, chez un oncle qu'elle n'a jamais vu. La voilà plongée cinquante ans en arrière; privée d'ordinateur, de téléphone, de tout le confort qui a fait son quotidien depuis sa naissance, Léa doit s'adapter, non sans mal, à une vie tout autre. Et puis, l'amour s'en mêle...",
    price: "10.00",
    url: "https://www.publier-un-livre.com/fr/le-livre-en-papier/3099-sa-majeste-lea",
    command: { mail: false },
  },
  {
    id: "foret",
    title: "La forêt des miroirs",
    category: Category.JEUNESSE,
    pic: "/Livres/la_foret_des_miroirs.jpeg",
    description:
      "Antoine est accro aux jeux vidéo, Charles est fan des hamburgers frites, Cyrielle et Lilou ne veulent porter que des vêtements stylés. Mais surtout, les quatre ados sont amis pour la vie. Pour avoir porté secours à Danaé, la fille du châtelain, ils sont invités à séjourner une semaine au château de Rienne. Mais le jour venu, les chauffeurs chargés de les accueillir à la gare abandonnent les quatre amis en pleine forêt, après les avoir dépouillés de leurs portables, montres, portefeuilles et autres objets de valeur. Contraints de passer en mode survie, bien loin de leurs passions et du confort auquel ils sont habitués, ils seront confrontés à la faim, à la soif et à la peur. La forêt des Miroirs réserve parfois bien des surprises…",
    price: "10.00",
    url: "https://www.publier-un-livre.com/fr/le-livre-en-papier/3098-la-foret-des-miroirs",
    command: { mail: false },
  },
  {
    id: "Roses",
    title: "Roses mortelles",
    category: Category.JEUNESSE,
    pic: "/Livres/roses_mortelles.jpg",
    description:
      "On se moque de Romain parce qu’il bégaie, de Gaby parce qu’elle est grosse, de Miguel parce qu’il est cancre… Six jeunes de 12 à 15 ans, tous victimes de l’intolérance des autres, décident de se réunir autour d’une radio sur Internet, pour deux émissions hebdomadaires, interactives, dont le but est précisément de lutter contre le harcèlement. Mais visiblement, l’initiative ne plaît pas à tout le monde. Très vite, les jeunes animateurs reçoivent des menaces sous la forme d’étranges roses noires. Les messages se font de plus en plus intimidants, et un jour, c’est le drame : deux d’entre eux se font enlever en pleine émission.",
    price: "10.00",
    url: "https://www.publier-un-livre.com/fr/le-livre-en-papier/2813-roses-mortelles",
    command: { mail: false },
  },
  {
    id: "lola",
    title: "Lola Lolamour",
    category: Category.JEUNESSE,
    pic: "/Livres/lola_lolamour.jpg",
    description:
      "À quinze ans, Lola en a marre de la vie que lui impose sa famille issue de la petite bourgeoisie de province. Marre de la routine, des préjugés racistes clairement affichés par son père, un notable de la région. Ainsi, lorsqu'une bande de gitans vient s'installer à quelques centaines de mètres de la villa familiale, tout le monde se réjouit de voir le père de Lola user de son influence pour obliger ces 'indésirables' à décamper au plus vite... Tout le monde, sauf Lola, qui, émue par ces personnes, leur musique, leur langue et leur manière de vivre, croise furtivement le chemin de Tonio, le jeune gitan aux yeux de braise... Mais les Roms doivent pourtant quitter la région. Lola est prête à tout pour les retrouver. Commence alors un long périple, durant lequel Lola utilisera la ruse, affrontera des dangers et rencontrera un autre garçon, Guillaume. Par son charme et son aisance, ce dernier séduira la jeune fille. Le coeur coupé en deux, Lola devra choisir... si le destin lui en laisse l'occasion.",
    price: "8.00",
    url: "mailto:herve_jacque@hotmail.com",
    command: { mail: true },
  },
];
