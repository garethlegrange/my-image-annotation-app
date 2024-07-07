export default function AnnotationToggle({
  value,
  handler,
}: {
  value: boolean;
  handler: () => void;
}) {
  return (
    <div className="border p-4">
      <h2>Annotation Toggle </h2>
      <p>
        {value
          ? "Annotations are currently visible"
          : "Annotations are currently hidden"}
      </p>
      <button type="button" onClick={handler}>
        Toggle Annotations
      </button>
    </div>
  );
}
