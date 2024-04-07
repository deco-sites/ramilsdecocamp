import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import ProductVotedProductCard from "../../islands/ProductVoted/ProductVotedProductCard.tsx";

export interface Props {
  image: ImageWidget;
  title: string;
  description: string;
  price: string;
}

export default function HorizontalProductCard(
  { image, title, description, price }: Props,
) {
  return (
    <div>
      <div>
        <Image height={120} width={120} src={image} />
      </div>

      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>

        <h5>{price}</h5>
      </div>

      <ProductVotedProductCard />

      <button type="button">{"Adicionar ao Carrinho"}</button>
    </div>
  );
}
