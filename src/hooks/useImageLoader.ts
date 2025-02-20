import { useState, useEffect } from "react";

export const useImageLoader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError("Erreur de chargement de l'image");
  }, [src]);

  return { isLoaded, error };
};
