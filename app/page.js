"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

// ✏️ Change this to your name
const YOUR_NAME = "ABDUL HAADI";

// Mirpur, Azad Jammu & Kashmir
const MIRPUR = { lat: 33.1478, lng: 73.7515 };

export default function Home() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return (
    <main className="page">
      <header className="intro">
        <h1>{YOUR_NAME}</h1>
        <p className="place">Mirpur, Azad Jammu &amp; Kashmir</p>
        <p className="coords">
          {MIRPUR.lat}° N, {MIRPUR.lng}° E
        </p>
      </header>

      <section className="map-wrap" aria-label="Map of Mirpur AJK">
        {loadError ? (
          <p className="msg">
            The map could not load. Check that your API key in .env.local is
            valid and that Maps JavaScript API is enabled.
          </p>
        ) : !isLoaded ? (
          <p className="msg">Loading map…</p>
        ) : (
          <GoogleMap
            mapContainerClassName="map"
            center={MIRPUR}
            zoom={12}
            options={{ streetViewControl: false, mapTypeControl: true }}
          >
            <MarkerF position={MIRPUR} title="Mirpur, AJK" />
          </GoogleMap>
        )}
      </section>

      <footer className="foot">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${MIRPUR.lat},${MIRPUR.lng}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </footer>
    </main>
  );
}
