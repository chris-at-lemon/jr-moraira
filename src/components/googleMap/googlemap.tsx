import { GoogleMapsEmbed } from "@next/third-parties/google";

const GoogleMap = () => {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      height={400}
      width="100%"
      mode="place"
      q={`place_id:ChIJZW_8E1oHnhIRNzYOw3AX8yE`}
    />
  );
};

export default GoogleMap;
