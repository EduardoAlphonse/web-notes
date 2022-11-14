import Link from "next/link";

import { NextPageWithLayout } from "./_app";
import { Layout } from "../components/Layout";

import GoogleLogo from "../assets/google-logo.svg";
import TakingNotes from "../assets/taking-notes.svg";

const Login: NextPageWithLayout = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-col w-full md:w-[42%] justify-center items-center gap-4 p-5 xs:p-16 md:p-4 lg:p-16 text-center text-sm">
        <h1 className="text-3xl font-bold font-heading">
          Bem vindo(a) ao
          <br />
          <span className="text-violet-600">Web Notes!</span>
        </h1>

        <p className="mt-4">
          Para prosseguir, clique no botão abaixo para entrar com sua conta do
          Google
        </p>

        {/* <p>
          Por favor, insira suas credenciais
          <br />
          para acessar o sistema.
        </p>

        <form className="flex flex-col w-full">
          <input
            type="email"
            placeholder="Email"
            className="border-b border-zinc-300 py-2 mb-4 outline-none focus:border-b-violet-600 transition-colors duration-300 bg-transparent"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border-b border-zinc-300 py-2 mb-4 outline-none focus:border-b-violet-600 transition-colors duration-300 bg-transparent"
          />

          <a
            href="#"
            className="text-right text-xs text-zinc-800 font-semibold underline mb-4 hover:text-violet-600 transition-colors duration-300 self-end"
          >
            Esqueci minha senha
          </a>

          <Button />
        </form> */}

        {/* <button className="flex justify-center items-center gap-4 text-base w-full px-4 py-3 rounded-lg border-2 border-zinc-200 hover:border-zinc-300">
          <GoogleLogo width={24} /> Entrar com o Google
        </button> */}

        <Link
          href="/"
          className="w-full"
        >
          <button className="flex justify-center items-center gap-4 text-base w-full px-4 py-3 rounded-lg border-2 border-zinc-200 hover:border-zinc-300">
            <GoogleLogo width={24} /> Entrar com o Google
          </button>
        </Link>
      </main>
      <div className="flex-1 justify-center items-center bg-zinc-200 hidden md:flex">
        <TakingNotes
          width="50%"
          height="50%"
        />
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = (page: React.ReactElement) => {
  return <Layout pageTitle="Entrar - Web Notes">{page}</Layout>;
};
