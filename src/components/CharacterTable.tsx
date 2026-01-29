import type { Character } from "../types/Character";

interface Props {
  characters: Character[];
}

export const CharacterTable = ({ characters }: Props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Género</th>
                <th>Edad</th>
                <th>Ocupación</th>
                <th>Estado</th>
                <th>Foto</th>
            </tr>
        </thead>
        <tbody>
            {characters.map((c) => (
            <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.gender}</td>
            <td>{c.age ?? "N/A"}</td>
            <td>{c.occupation}</td>
            <td>{c.status}</td>
            <td>
              <img src={c.image} alt={c.name} width={50} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};







