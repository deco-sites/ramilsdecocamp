import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface ImageUnit {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  images: ImageUnit[];
  lengthToShow: number;
}

export default function PartialImageGallery(props: Props) {
  return (
    <aside>
      {props.images.map((image, index) => {
        if (index < props.lengthToShow) {
          return (
            <img src={image.image} width={50} height={50} alt={image.alt} />
          );
        }
      })}
      <button
        {...usePartialSection({
          props: { lengthToShow: props.lengthToShow + 1 },
        })}
      >
        Clique!
      </button>
    </aside>
  );
}
