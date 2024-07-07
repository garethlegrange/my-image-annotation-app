import { useStore } from "@/store";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { use, useEffect, useState } from "react";

export default function AnnotationList() {
  const { annotations, toggleAnnotation, searchAnnotations } = useStore();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    searchAnnotations(query);
  }, [query, searchAnnotations]);

  return (
    <Card>
      <h2 className="font-bold mb-2">Annotations</h2>

      <div className="mb-4">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

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
