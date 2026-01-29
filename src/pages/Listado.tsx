import { useEffect, useState } from "react";
import { getCharacters } from "../api/simpsonsApi";
import { CharacterTable } from "../components/CharacterTable";
import type { Character } from "../types/Character";

export const Listado = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    getCharacters(page)
      .then(setCharacters)
      .catch(() => setError("Error cargando la API"));
  }, [page]);

  return (
    <>
      <h2>Listado de Personajes</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <CharacterTable characters={characters} />

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        ◀
      </button>
      <span> Página {page} </span>
      <button onClick={() => setPage(page + 1)}>▶</button>
    </>
  );
};
