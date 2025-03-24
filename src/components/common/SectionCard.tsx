// biome-ignore lint/style/useImportType: <explanation>
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  disableDefaultMaxWidth?: boolean;
};

const SectionCard = ({
  className,
  children,
  disableDefaultMaxWidth,
}: Props) => (
  <section
    className={clsx(
      "p-6 bg-[var(--secondary)] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 w-full",
      !disableDefaultMaxWidth && "max-w-md",
      className
    )}
  >
    {children}
  </section>
);

export default SectionCard;
