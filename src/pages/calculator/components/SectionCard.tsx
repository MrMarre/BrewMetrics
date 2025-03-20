// biome-ignore lint/style/useImportType: <explanation>
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const SectionCard = ({ children }: Props) => (
  <section className="p-6 bg-[var(--secondary)] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 w-full max-w-md">
    {children}
  </section>
);

export default SectionCard;
