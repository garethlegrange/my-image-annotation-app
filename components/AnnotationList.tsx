import { useStore } from "@/store";

export default function AnnotationList() {
  const { annotations, toggleAnnotation } = useStore();

  return (
    <div className="border p-4">
      <h2 className="font-bold mb-2">Annotations</h2>
      <ul className="space-y-2">
        {annotations.map((annotation) => (
          <li key={annotation.class_uuid}>
            <label className="flex items-center gap-x-2 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" fill={annotation.color} />
              </svg>
              <span>{annotation.class_name}</span>
              <input
                type="checkbox"
                value={annotation.class_uuid}
                title="Toggle annotation visibility"
                className="ml-auto"
                onChange={() => {
                  toggleAnnotation(annotation.class_uuid);
                }}
                checked={annotation.visible}
              />
            </label>
          </li>
        ))}
      </ul>
      <pre>
        {JSON.stringify(annotations, null, 2)}
      </pre>
    </div>
  );
}
