interface WireframeImageProps {
  width: string;
  height: string;
  className?: string;
  src?: string;
  alt?: string;
}

export default function WireframeImage({
  width,
  height,
  className,
  src,
  alt = "Imagem",
}: WireframeImageProps) {
  return src ? (
    <img src={src} alt={alt} style={{ width, height }} className={className} />
  ) : (
    <div
      style={{ width, height }}
      className={`bg-gray-300 ${className}`}
    />
  );
}
