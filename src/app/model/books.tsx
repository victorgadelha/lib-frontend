export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  description: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    isbn: "978-8533615549",
    category: "Fantasia",
    description:
      "Uma obra épica que segue a jornada de Frodo Bolseiro na destruição do Anel do Poder.",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    category: "Distopia",
    description:
      "Um romance distópico sobre um regime totalitário que controla todos os aspectos da vida humana.",
  },
  {
    id: "3",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    isbn: "978-8503013830",
    category: "Literatura Brasileira",
    description:
      "A história de Bentinho e sua relação com Capitu, com temas de ciúmes, traição e ambiguidades.",
  },
  {
    id: "4",
    title: "Crime e Castigo",
    author: "Fiódor Dostoiévski",
    isbn: "978-8537813522",
    category: "Clássico",
    description:
      "Um estudo psicológico sobre o assassinato cometido por Raskólnikov e a culpa que o consome.",
  },
  {
    id: "5",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    isbn: "978-2070612758",
    category: "Infantil",
    description:
      "A história de um príncipe que viaja por planetas, conhecendo diferentes personagens e refletindo sobre a vida.",
  },
  {
    id: "6",
    title: "Moby Dick",
    author: "Herman Melville",
    isbn: "978-1503280786",
    category: "Aventura",
    description:
      "A busca obsessiva do capitão Ahab pela baleia Moby Dick e suas reflexões filosóficas sobre a vida e a natureza humana.",
  },
  {
    id: "7",
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    isbn: "978-0141439518",
    category: "Romance",
    description:
      "A história de Elizabeth Bennet e sua relação com o orgulhoso Mr. Darcy, com temas de classe e casamento.",
  },
  {
    id: "8",
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    isbn: "978-8525060530",
    category: "Literatura Brasileira",
    description:
      "O narrador Brás Cubas, morto, relembra sua vida com sarcasmo e crítica social.",
  },
  {
    id: "9",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    isbn: "978-8535909553",
    category: "Política",
    description:
      "Uma fábula política que descreve a revolução dos animais contra os humanos, uma crítica ao totalitarismo.",
  },
  {
    id: "10",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-8533613377",
    category: "Fantasia",
    description:
      "A aventura de Bilbo Bolseiro, que se junta a um grupo de anões em uma missão para recuperar um tesouro guardado por um dragão.",
  },
  {
    id: "11",
    title: "Drácula",
    author: "Bram Stoker",
    isbn: "978-0141439846",
    category: "Terror",
    description:
      "A história de Jonathan Harker e sua luta contra o vampiro Conde Drácula, um dos maiores clássicos do gênero.",
  },
  {
    id: "12",
    title: "Odisseia",
    author: "Homero",
    isbn: "978-0140268867",
    category: "Épico",
    description:
      "A jornada de Odisseu, herói grego, em sua busca para retornar a sua casa após a Guerra de Troia.",
  },
  {
    id: "13",
    title: "Ilíada",
    author: "Homero",
    isbn: "978-0140275360",
    category: "Épico",
    description:
      "A história da Guerra de Troia e dos heróis gregos, centrada em Aquiles e sua ira.",
  },
  {
    id: "14",
    title: "Hamlet",
    author: "William Shakespeare",
    isbn: "978-0521618748",
    category: "Teatro",
    description:
      "O príncipe Hamlet busca vingança contra seu tio, que assassinou seu pai e se casou com sua mãe.",
  },
  {
    id: "15",
    title: "Macbeth",
    author: "William Shakespeare",
    isbn: "978-0743477109",
    category: "Teatro",
    description:
      "A tragédia de Macbeth, um nobre escocês que, consumido pela ambição, comete assassinatos para alcançar o poder.",
  },
  {
    id: "16",
    title: "O Morro dos Ventos Uivantes",
    author: "Emily Brontë",
    isbn: "978-0141439556",
    category: "Romance",
    description:
      "A história de Catherine e Heathcliff, um amor trágico e destrutivo em um ambiente selvagem e isolado.",
  },
  {
    id: "17",
    title: "Os Três Mosqueteiros",
    author: "Alexandre Dumas",
    isbn: "978-0140449266",
    category: "Aventura",
    description:
      "As aventuras de D'Artagnan e seus três amigos, Athos, Porthos e Aramis, na França do século XVII.",
  },
  {
    id: "18",
    title: "O Conde de Monte Cristo",
    author: "Alexandre Dumas",
    isbn: "978-0140449267",
    category: "Aventura",
    description:
      "A busca de Edmond Dantès por vingança contra aqueles que o traíram, após ser injustamente preso.",
  },
  {
    id: "19",
    title: "A Divina Comédia",
    author: "Dante Alighieri",
    isbn: "978-0140448955",
    category: "Poema Épico",
    description:
      "A jornada de Dante pelos três reinos do além: Inferno, Purgatório e Paraíso, em busca da redenção.",
  },
  {
    id: "20",
    title: "Fausto",
    author: "Johann Wolfgang von Goethe",
    isbn: "978-0140449013",
    category: "Filosofia",
    description:
      "A história de Fausto, que faz um pacto com o diabo em busca de conhecimento e prazer, explorando temas de moralidade e ambição.",
  },
  {
    id: "21",
    title: "A Metamorfose",
    author: "Franz Kafka",
    isbn: "978-8535909409",
    category: "Surrealismo",
    description:
      "Gregor Samsa se transforma em um inseto e lida com a alienação, o medo e a desumanização.",
  },
  {
    id: "22",
    title: "O Estrangeiro",
    author: "Albert Camus",
    isbn: "978-8535909552",
    category: "Existencialismo",
    description:
      "A história de Meursault, um homem indiferente que comete um crime sem motivo aparente e enfrenta as consequências.",
  },
  {
    id: "23",
    title: "Os Miseráveis",
    author: "Victor Hugo",
    isbn: "978-2070408503",
    category: "Clássico",
    description:
      "A luta de Jean Valjean para se redimir e enfrentar a opressão social, em meio à Revolução Francesa.",
  },
  {
    id: "24",
    title: "Guerra e Paz",
    author: "Liev Tolstói",
    isbn: "978-0140447934",
    category: "História",
    description:
      "A descrição da sociedade russa durante as Guerras Napoleônicas, com foco nas famílias aristocráticas e suas relações.",
  },
  {
    id: "25",
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    isbn: "978-2070418502",
    category: "Realismo",
    description:
      "A história de Emma Bovary, uma mulher insatisfeita com sua vida, que busca a felicidade através de relações e consumismo.",
  },
  {
    id: "26",
    title: "O Nome do Vento",
    author: "Patrick Rothfuss",
    isbn: "978-8568263133",
    category: "Fantasia",
    description:
      "A história de Kvothe, um jovem talentoso que busca respostas sobre o misterioso Chandriano.",
  },
  {
    id: "27",
    title: "Neuromancer",
    author: "William Gibson",
    isbn: "978-0441569595",
    category: "Ficção",
    description:
      "Um clássico cyberpunk que acompanha um hacker em um mundo dominado por inteligências artificiais.",
  },
  {
    id: "28",
    title: "A Fundação",
    author: "Isaac Asimov",
    isbn: "978-8580414010",
    category: "Sci-Fi",
    description:
      "A saga da Fundação, uma organização criada para preservar o conhecimento da humanidade durante a queda do Império Galáctico.",
  },
  {
    id: "29",
    title: "Inferno",
    author: "Dan Brown",
    isbn: "978-8580412993",
    category: "Suspense",
    description:
      "Robert Langdon precisa decifrar enigmas baseados na obra de Dante para impedir uma catástrofe global.",
  },
  {
    id: "30",
    title: "O Sol é para Todos",
    author: "Harper Lee",
    isbn: "978-0061120084",
    category: "Drama",
    description:
      "A história de Scout Finch, uma garota que presencia o racismo e a injustiça em sua pequena cidade sulista.",
  },
];
