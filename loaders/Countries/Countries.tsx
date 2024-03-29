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
  

export default async function Loader({ limit }: Props): Promise<Country[]> {
    const getLimit = limit ? limit : 4;

    const countriesResponse = await fetch(
        "https://api.sampleapis.com/countries/countries",
    );
    const countriesFormatted = await countriesResponse.json() as Country[];
    
    const filteredCountriesByLimit = countriesFormatted.slice(0, getLimit);

    return filteredCountriesByLimit;
}