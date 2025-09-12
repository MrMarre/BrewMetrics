import clsx from "clsx";
import { ReactNode, ElementType } from "react";

type Variant = "flat" | "elevated" | "hover";

interface Props {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: Variant;
  padded?: boolean;
  header?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  flat: "shadow-none",
  elevated: "shadow-sm",
  hover: "shadow-sm hover:shadow-lg transition-shadow",
};

export function CardSection({
  children,
  className,
  as: Tag = "section",
  variant = "hover",
  padded = true,
  header = "h2",
}: Props) {
  return (
    <Tag
      className={clsx(
        "bg-[var(--secondary)] border border-gray-200 rounded-lg",
        variantClasses[variant],
        padded && "p-6",
        className
      )}
    >
      {header && <div className="mb-4 text-xl text-center">{header}</div>}
      {children}
    </Tag>
  );
}
export default CardSection;
