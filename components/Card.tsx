// Card component with children
export default function ImageInfoBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
      {children}
    </div>
  );
}
