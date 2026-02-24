import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-46.6333, -23.5505], // São Paulo coordinates
      zoom: 11,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add a marker for the business location
    new mapboxgl.Marker({ color: '#8B5CF6' })
      .setLngLat([-46.6333, -23.5505])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div class="p-2"><strong>PintorPro</strong><br/>São Paulo, SP</div>')
      )
      .addTo(map.current);

    setIsMapReady(true);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapReady) {
    return (
      <div className="w-full h-[400px] bg-muted rounded-xl flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4">
          <div className="text-center">
            <h3 className="font-heading font-semibold text-lg mb-2">Configure o Mapa</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Para visualizar o mapa, insira seu token público do Mapbox.
              <br />
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Obtenha seu token gratuito aqui
              </a>
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Cole seu token do Mapbox aqui"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full"
            />
            <Button type="submit" variant="hero" className="w-full">
              Carregar Mapa
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-xl shadow-lg" />
    </div>
  );
};

export default Map;
