export interface Image {
  id: number;
  image_url: string;
  name: string;
  alt: string;
  description: string;
  created_at: string;
  category: string;
}

export interface Annotation {
  class_name: string;
  class_uuid: string;
  color: string;
  h: number;
  w: number;
  x: number;
  y: number;
}
