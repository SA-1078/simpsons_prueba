import type { Character } from "../types/Character";

export const getCharacters = async (page: number): Promise<Character[]> => {
  const res = await fetch(
    `https://thesimpsonsapi.com/api/characters?page=${page}`
  );

  if (!res.ok) {
    throw new Error("Error cargando la API");
  }

  const data = await res.json();
  return data.results as Character[];
};
