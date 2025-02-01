import { GoogleMapsEmbed } from "@next/third-parties/google";

interface Props {
  placeId: string;
}

const GoogleMap = ({ placeId }: Props) => {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      height={400}
      width="100%"
      mode="place"
      q={`place_id:${placeId}`}
    />
  );
};

export default GoogleMap;
