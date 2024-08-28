import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "bg-gradient-to-b from-black to-zinc-600 p-1 min-w-[150px] text-white rounded-md",
  variants: {
    bold: {
      true: "font-bold",
    },
    isSmall: {
      true: "max-w-[150px] bg-red",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
}

export function Button({ children, bold, isSmall }: ButtonProps) {
  return (
    <button className={buttonStyles({ bold, isSmall })}>{children}</button>
  );
}
