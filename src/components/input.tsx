import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <label className="w-full flex flex-col">
      {label}
      <input
        className="flex-1 p-3 rounded-md border border-zinc-300"
        {...rest}
      />
    </label>
  );
}
