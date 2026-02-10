"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function MapSection() {
  const { venue } = WEDDING_DATA;

  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "",
    libraries: ["services", "clusterer"],
  });

  return (
    <div className="w-full soft-card overflow-hidden h-[360px]">
      <Map center={venue.coordinates} style={{ width: "100%", height: "100%" }}>
        <MapMarker position={venue.coordinates}>
          <div
            style={{
              padding: "5px",
              color: "#000",
              fontFamily: "var(--font-sans)",
            }}
          >
            {venue.name}
          </div>
        </MapMarker>
      </Map>
    </div>
  );
}
