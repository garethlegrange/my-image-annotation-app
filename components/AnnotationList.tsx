import { useStore } from "@/store";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

// Annotation list component
export default function AnnotationList() {
  // Annotations, toggle annotation visibility, and search annotations from Zustand store
  const { annotations, toggleAnnotation, searchAnnotations } = useStore();

  // Local state for search query
  const [query, setQuery] = useState<string>("");

  // Search annotations when the query changes
  useEffect(() => {
    searchAnnotations(query);
  }, [query, searchAnnotations]);

  return (
    <Card>
      <h2 className="font-bold mb-2">Annotations</h2>

      <div className="mb-4">
        {/* Search bar component to search annotations */}
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      <ul className="space-y-2">
        {/* Map over annotations and display them in a list */}
        {annotations.map((annotation) => (
          <li key={annotation.class_uuid}>
            <label className="flex items-center gap-x-2 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" fill={annotation.color} />
              </svg>
              <span>{annotation.class_name}</span>
              {/* Checkbox to toggle annotation visibility */}
              <input
                type="checkbox"
                value={annotation.class_uuid}
                title="Toggle annotation visibility"
                className="ml-auto size-4 text-slate-600 bg-gray-100 border-gray-300 rounded focus:ring-slate-500"
                onChange={() => {
                  toggleAnnotation(annotation.class_uuid);
                }}
                checked={annotation.visible} 
                name="annotation item"
              />
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
