import { asset } from "$fresh/runtime.ts";

export function ErrorFallback() {
  return (
    <div>
      <img height={300} width={300} src={"/image/acai.jpeg"} />
      <h2>{"Açaí"}</h2>
      <h3>
        {"O açaí é um fruto brasileiro cultivado predominantemente na região amazônica. Com cor escura, que vai do roxo ao preto, o fruto arredondado nasce em cachos e, na maioria das vezes, em locais com solos mais úmidos ou alagados."}
      </h3>

      <a href="/culturas" title="Ir para página de cultura">Saber Mais</a>
    </div>
  );
}

export function LoadingFallBack() {
  return (
    <div>
      <img height={300} width={300} src={"/image/acai.jpeg"} />
      <h2>{"Loading..."}</h2>
      <h3>{"Loading..."}</h3>
    </div>
  );
}

export { default } from "../../components/horizontalProductCard/horizontalProductCard.tsx";
