import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-transparent focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        leaf:
+          "bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-light)] ",
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs  hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        hero: "h-12 md:h-14 px-6 md:px-8 text-base md:text-lg has-[>svg]:px-4 rounded-[30px_6px_30px_6px] " +
          /* thinner visible stacked lines by default, modest blur for depth */
          "shadow-[0_2px_0_var(--accent-dark,#065f46),0_4px_0_var(--accent-dark,#065f46),0_8px_6px_rgba(0,0,0,0.12)] " +
          /* smaller, smoother growth on hover (less vertical jump) */
          "hover:shadow-[0_3px_0_var(--accent-dark,#065f46),0_6px_0_var(--accent-dark,#065f46),0_12px_10px_rgba(0,0,0,0.18)] " +
          /* subtle lift + tiny scale */
          "transform-gpu hover:-translate-y-0.5 hover:scale-[1.02] transition-shadow transition-transform duration-200 ease-out",
        
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
  // "h-12 md:h-14 px-6 md:px-8 text-base md:text-lg has-[>svg]:px-4 rounded-[30px_6px_30px_6px] " +
  //          "transform hover:-translate-y-0.5 " +
  //         "hover:shadow-[0_3px_0_var(--accent-dark,#111),0_6px_0_var(--accent-dark,#111),0_10px_15px_rgba(0,0,0,0.4)]",
export { Button, buttonVariants };
