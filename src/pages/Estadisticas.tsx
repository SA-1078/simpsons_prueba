import { useEffect, useState } from "react";
import { getCharacters } from "../api/simpsonsApi";
import type { Character } from "../types/Character";

export const Estadisticas = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [status, setStatus] = useState("Alive");

  useEffect(() => {
    getCharacters(1).then(setCharacters);
  }, []);

  const totalByStatus = characters.filter(
    (c) => c.status === status
  ).length;

  const averageAge =
    characters.reduce((acc, c) => acc + (c.age ?? 0), 0) /
    characters.filter((c) => c.age !== null).length;

  return (
    <>
      <h2>Estadísticas</h2>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Alive">Alive</option>
        <option value="Deceased">Deceased</option>
        <option value="Unknown">Unknown</option>
      </select>

      <p>Total por estado: {totalByStatus}</p>
      <p>Promedio de edad: {averageAge.toFixed(1)}</p>
    </>
  );
};
