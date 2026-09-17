import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

export default function Card({ title, description, image, children }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden max-w-sm w-full bg-white">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        {children && (
          <div className="pt-2 mt-1 border-t border-gray-100">{children}</div>
        )}
      </div>
    </div>
  );
}