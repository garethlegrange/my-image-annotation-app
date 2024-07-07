"use server";

// This file contains the actions that are used to fetch data from the server
// We use the fetch API to make requests to the server

// Fetch images from the server
export const fetchImages = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching images");
  }
};


// Fetch image from the server
// This could be used to fetch a single high resolution image by ID
export const fetchImage = async (id: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images/${id}`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching image");
  }
};

// Fetch annotations from the server
export const fetchAnnotations = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/annotations/`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching annotations");
  }
};
