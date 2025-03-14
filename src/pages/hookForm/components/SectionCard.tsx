// biome-ignore lint/style/useImportType: <explanation>
import { ReactNode } from "react";
type Props = {
	children: ReactNode;
};

const SectionCard = ({ children }: Props) => (
	<section className="p-4 border rounded-lg w-full max-w-md">
		{children}
	</section>
);

export default SectionCard;
