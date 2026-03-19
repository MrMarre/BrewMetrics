import React from "react";
import cn from "clsx";

export type HeadingProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export function Heading({
  as: Heading = "h1",
  className,
  children,
}: HeadingProps) {
  return (
    <Heading className={cn("text-center font-light text-gray-900 ", className)}>
      {children}
    </Heading>
  );
}
