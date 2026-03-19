// biome-ignore lint/style/useImportType: <explanation>
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { Heading, HeadingProps } from "../ui/heading";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  disableDefaultMaxWidth?: boolean;
  children?: ReactNode;
  title?: string;
  slots?: {
    title?: ReactNode;
  };
  slotProps?: {
    root?: Partial<Omit<HTMLAttributes<HTMLElement>, "className">>;
    title?: Partial<HeadingProps>;
  };
};

const NewSectionCard = ({
  className,
  children,
  title = "",
  disableDefaultMaxWidth,
  slots,
  slotProps,
}: Props) => (
  <section
    className={clsx(
      "w-full lg:text-xl 2xl:text-2xl p-6 bg-[var(--secondary)] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 ",
      !disableDefaultMaxWidth &&
        "max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl",
      className,
    )}
    {...slotProps?.root}
  >
    {slots?.title ? (
      slots.title
    ) : (
      <Heading
        as="h2"
        {...slotProps?.title}
        className={cn("text-2xl 2xl:text-4xl mb-6", slotProps?.title?.className)}
      >
        {title}
      </Heading>
    )}
    {children}
  </section>
);

export default NewSectionCard;
