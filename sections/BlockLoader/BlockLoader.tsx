import { Country } from "deco-sites/ramilsdecocamp/loaders/Countries/Countries.tsx";

export interface Props {
    countries: Country[]
}

export default function BlockLoaderExample({ countries }: Props) {
    return (
      <div>
        {countries.map((country) => (
          <div>
            {country.name}
            <hr></hr>
          </div>
        ))}
      </div>
    );
  }
  