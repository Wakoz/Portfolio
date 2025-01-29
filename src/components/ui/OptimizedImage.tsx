// src/components/ui/OptimizedImage.tsx
import { useImageLoader } from "../../hooks/useImageLoader";

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const OptimizedImage = ({ src, alt, className = "" }: OptimizedImageProps) => {
  const { isLoaded, error } = useImageLoader(src);

  if (error) {
    return <div className="image-error">Image non disponible</div>;
  }

  return (
    <div className={`image-container ${!isLoaded ? "loading" : ""}`}>
      {!isLoaded && <div className="image-placeholder" />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? "loaded" : ""}`}
      />
    </div>
  );
};

export default OptimizedImage;
