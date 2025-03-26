import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Item {
  id: number;
  name: string;
  category: string;
  co2Saved: number;
  user: string;
  location: { lat: number; lng: number };
}

interface MapProps {
  items: Item[];
}

const Map: React.FC<MapProps> = ({ items }) => {
  useEffect(() => {
    const map = L.map('map').setView([-1.2921, 36.8219], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    items.forEach(item => {
      L.marker([item.location.lat, item.location.lng])
        .addTo(map)
        .bindPopup(`<b>${item.name}</b><br>Category: ${item.category}<br>CO2 Saved: ${item.co2Saved} kg`);
    });

    return () => {
      map.remove();
    };
  }, [items]);

  return <div id="map" style={{ height: '400px', width: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />;
};

export default Map;