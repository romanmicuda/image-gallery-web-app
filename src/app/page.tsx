import Image from "next/image";
import Welcome from "./components/Welcome";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function Home() {
  return (
    <main>
      <Welcome />
    </main>
  );
}
