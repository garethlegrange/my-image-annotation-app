import { useStore } from "@/store";
import Toggle from "@/components/ui/Toggle";
import Card from "./Card";

export default function AnnotationToggle() {
  const { showAnnotations, toggleAllAnnotations } = useStore();

  return (
    <Card>
      <div className="flex items-center justify-between">
        <p>
          {showAnnotations ? "Hide all annotations" : "Show all annotations"}
        </p>
        <Toggle value={showAnnotations} onChange={toggleAllAnnotations} />
      </div>
    </Card>
  );
}
