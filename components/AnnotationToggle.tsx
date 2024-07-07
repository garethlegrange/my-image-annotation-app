import { useStore } from "@/store";
import Toggle from "@/components/ui/Toggle";
import Card from "./Card";

// Annotation toggle component
export default function AnnotationToggle() {
  // Show annotations and toggle all annotations from Zustand store
  const { showAnnotations, toggleAllAnnotations } = useStore();

  return (
    <Card>
      <div className="flex items-center justify-between">
        <p>
          {showAnnotations ? "Hide all annotations" : "Show all annotations"}
        </p>
        {/* Toggle component to show/hide annotations */}
        <Toggle value={showAnnotations} onChange={toggleAllAnnotations} />
      </div>
    </Card>
  );
}
