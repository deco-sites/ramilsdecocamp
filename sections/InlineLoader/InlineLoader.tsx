import { AppContext } from "deco-sites/ramilsdecocamp/apps/site.ts";
import { SectionProps } from "deco/mod.ts";

export interface Country {
  name: string;
  media: {
    flag: string;
  };
  id: number;
}

export interface Props {
  limit?: number;
}

export const loader = async (props: Props, req: Request, ctx: AppContext) => {
  // default value to limit is 4
  const getLimit = props.limit ? props.limit : 4;

  const countriesResponse = await fetch(
    "https://api.sampleapis.com/countries/countries",
  );
  const countriesFormatted = await countriesResponse.json() as Country[];

  const filteredCountriesByLimit = countriesFormatted.slice(0, getLimit);

  return {
    ...props,
    filteredCountriesByLimit,
  };
};

export default function InlineLoaderCountryExample(
  { limit, filteredCountriesByLimit }: SectionProps<typeof loader>,
) {
  return (
    <div>
      {filteredCountriesByLimit.map((country) => (
        <div>
          {country.name}
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
