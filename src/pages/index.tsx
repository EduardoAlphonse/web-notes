import { useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";

import { NoteProps } from "../components/Note";
import { Layout } from "../components/Layout";
import { Note } from "../components/Note";

const baseNotes = [
  {
    id: "1",
    title: "Item 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "2",
    title: "Item 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "3",
    title: "Item 3",
    description: "",
  },
  {
    id: "4",
    title: "Item 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "5",
    title: "Item 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "6",
    title: "Item 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "7",
    title: "Item 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "8",
    title: "Item 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "9",
    title: "Item 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
  {
    id: "10",
    title: "Item 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis ducimus maxime quam?",
    tags: ["some tag", "other tag"],
  },
];

type Repo = {
  id: number;
  name: string;
  description: string;
};

const Home: NextPageWithLayout = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [search, setSearch] = useState("");

  const filteredRepos = search
    ? repos.filter((repo) => repo.name.toLowerCase().includes(search))
    : repos;
  // const filteredNotes = search
  //   ? notes.filter((note) => note.title.includes(search))
  //   : notes;

  console.log("Renderizou");

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/EduardoAlphonse/repos"
      );
      const data = await response.json();

      setRepos(data);
    };
    setNotes(baseNotes);
    getRepos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-4 px-5 pt-10 pb-5">
      <input
        type="text"
        placeholder="Procurar anotação"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        className="border-b border-zinc-300 py-2 outline-none focus:border-b-violet-600 transition-colors duration-300 bg-transparent"
      />

      <h1 className="text-2xl font-heading font-semibold">Minhas anotações</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <Note
            key={repo.id}
            title={repo.name}
            description={repo.description}
            tags={["JavaScript", "TypeScript", "TailwindCSS"]}
          />
        ))}
        {/* {filteredNotes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            description={note.description}
            tags={note.tags}
          />
        ))} */}
      </ul>
    </div>
  );
};

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <Layout pageTitle="Minhas anotações - Web Notes">{page}</Layout>;
};
