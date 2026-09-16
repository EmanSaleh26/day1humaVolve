interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = "No data found." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-500">
      <p>{message}</p>
    </div>
  );
}
