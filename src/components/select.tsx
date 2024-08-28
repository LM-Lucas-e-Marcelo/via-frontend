import { ComponentProps } from "react";

interface SelectProps extends ComponentProps<"select"> {
  label: string;
  options?: Array<{
    name: string;
    value: string;
  }>;
}

export function Select({ label, options, ...rest }: SelectProps) {
  return (
    <label className="w-full flex flex-col">
      {label}
      <select
        className="flex-1 p-3 rounded-md border border-zinc-300"
        {...rest}
      >
        {options?.map((option) => (
          <option value={option.value} key={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}
