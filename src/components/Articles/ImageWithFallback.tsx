import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Preload изображение для быстрой загрузки
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
      onError?.();
    };
    img.src = src;
  }, [src, fallbackSrc, onLoad, onError]);

  const PlaceholderIcon = () => (
    <div className={`flex items-center justify-center bg-gradient-to-br from-stefan-blue/20 to-stefan-blue/40 ${className}`}>
      <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );

  if (hasError && !fallbackSrc) {
    return <PlaceholderIcon />;
  }

  return (
    <>
      {!imageLoaded && <PlaceholderIcon />}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={imageLoaded ? {} : { position: 'absolute', top: 0, left: 0 }}
        loading="lazy"
      />
    </>
  );
};

export default ImageWithFallback;
