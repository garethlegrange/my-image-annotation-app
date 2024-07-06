"use server";

export const fetchImages = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/images`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching images");
  }
};
