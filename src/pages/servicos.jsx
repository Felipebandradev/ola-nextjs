import Menu from "@/components/Menu";
import Head from "next/head";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços - Meu app Next.js </title>
        <meta name="description" content="Página de Serviços..." />
      </Head>
      <h1>Olá Next.Js!</h1>
      <Menu />
      <h2>Serviços</h2>
      <ul>
        <li>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            minima modi quia ex!
          </p>
        </li>
        <li>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            minima modi quia ex!
          </p>
        </li>
        <li>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            minima modi quia ex!
          </p>
        </li>
        <li>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            minima modi quia ex!
          </p>
        </li>
      </ul>
    </>
  );
}
