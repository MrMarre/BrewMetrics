import Image, { ImageProps } from "next/image";
import { FC } from "react";

type SvgImageProps = {
  src: string;
  alt: string;
  className?: string;
} & Omit<ImageProps, "src" | "alt">;

const SvgImage: FC<SvgImageProps> = ({ src, alt, className, ...props }) => {
  return <Image src={src} alt={alt} className={className} {...props} />;
};

export default SvgImage;
