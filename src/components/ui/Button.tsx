import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  const base = "px-4 py-2 rounded-md font-medium transition-colors";
  const styles =
    variant === "primary"
      ? `${base} bg-blue-600 text-white hover:bg-blue-700`
      : `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`;

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
