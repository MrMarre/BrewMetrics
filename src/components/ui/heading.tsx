import React from "react";
import cn from "clsx";

export type HeadingProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export function Heading({ as: Component = "h1", className, children }: HeadingProps) {
  return (
    <Component className={cn("text-center font-bold text-gray-900 ", className)}>
      {children}
    </Component>
  );
}