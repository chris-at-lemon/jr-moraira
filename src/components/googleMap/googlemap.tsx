import { GoogleMapsEmbed } from "@next/third-parties/google";

type Props = {
  mapsApiKey: string;
};

const GoogleMap = ({ mapsApiKey }: Props) => {
  console.log({ mapsApiKey });

  return (
    <GoogleMapsEmbed
      apiKey="AIzaSyA4lmbeY7cwpVHbzyqKDQInxbr25CUWK5Y"
      height={400}
      width="100%"
      mode="place"
      q={`place_id:ChIJ-Wg3UsgHnhIR9o_O1EUJEiY`}
    />
  );
};

export default GoogleMap;
