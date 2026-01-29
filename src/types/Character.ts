export interface Character {
    id: number;
    name: string;
    gender: string;
    age: number | null;
    occupation: string;
    status: "Alive" | "Deceased" | "Unknown";
    image: string;
  }
  