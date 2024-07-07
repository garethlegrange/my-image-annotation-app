interface BoundingBoxProps {
  style: React.CSSProperties;
  title?: string;
  id?: string;
}

export default function BoundingBox(props: BoundingBoxProps) {
  return <div className="absolute border-2" {...props}></div>;
}
