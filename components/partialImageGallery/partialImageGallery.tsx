/*
Vamos agora criar mais uma section para a nossa home. A PartialImageGallery é uma galeria de imagens com as seguintes características:

 - Terá um array de props de imagens, e terá sempre, no mínimo, 3 imagens
 - Começa exibindo sempre 3 imagens
 - Caso haja mais imagens, deve exibir um botão de + para carregar uma nova imagem
 - O botão de mais imagens não aparece caso o array esteja no seu limite.
 - Opera fazendo uso do partials.
*/
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface ImageUnit {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  /*
   * @minLength 3
   */
  images: ImageUnit[];
  lengthToShow: number;
}

export default function PartialImageGallery({ images, lengthToShow }: Props) {
  return (
    <aside>
      {images.map((image, index) => {
        if (index < lengthToShow) {
          return (
            <img src={image.image} width={50} height={50} alt={image.alt} />
          );
        }
      })}

      {/*
        <button
            {...usePartialSection({ Props: { lengthToShow: lengthToShow + 1 } })}
        >
        
        Ver mais
      </button>
      */}
    </aside>
  );
}
