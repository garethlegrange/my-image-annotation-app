import { useStore } from "@/store";
import Toggle from "@/components/ui/Toggle";

export default function AnnotationToggle() {
  const { showAnnotations, toggleAllAnnotations } = useStore();

  return (
    <div className="flex items-center justify-between border p-4">
      <p>{showAnnotations ? "Hide all annotations" : "Show all annotations"}</p>
      <Toggle value={showAnnotations} onChange={toggleAllAnnotations} />
    </div>
  );
}
