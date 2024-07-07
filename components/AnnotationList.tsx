import type { Annotation } from "@/types";

export default function AnnotationList({
  annotations,
}: {
  annotations: Annotation[];
}) {
  return (
    <div>
      <h2>Annotations</h2>
      <ul>
        {annotations.map((annotation) => (
          <li key={annotation.class_uuid} className="flex items-center gap-x-2">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill={annotation.color} />
            </svg>
            <span>{annotation.class_name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
