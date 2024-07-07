// Interface for bounding box component
interface BoundingBoxProps {
  style: React.CSSProperties;
  title?: string;
  id?: string;
}

// Bounding box component with style
export default function BoundingBox(props: BoundingBoxProps) {
  return <div className="absolute border-2" {...props}></div>;
}
