import { useStore } from "@/store";
import Card from "./Card";

export default function AnnotationList() {
  const { annotations, toggleAnnotation, searchAnnotations } = useStore();

  return (
    <Card>
      <h2 className="font-bold mb-2">Annotations</h2>

      <label className="block mb-2">
        <span className="sr-only">Search annotations</span>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="search"
            placeholder="Search annotations"
            className="block w-full pl-9 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={(e) => {
              searchAnnotations(e.target.value);
            }}
          />
        </div>
      </label>

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
    </Card>
  );
}
