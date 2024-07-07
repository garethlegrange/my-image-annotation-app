"use server";

export const fetchImages = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/images`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching images");
  }
};

export const fetchImage = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/images/${id}`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching image");
  }
};

export const fetchAnnotations = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/annotations/`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching annotations");
  }
};
