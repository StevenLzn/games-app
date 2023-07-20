import Button from "./components/ui/buttons/button";
import { AiFillHome } from "react-icons/ai";
import IconButton from "./components/ui/buttons/icon-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Reiniciar</Button>
      <IconButton>
        <AiFillHome />
      </IconButton>
    </main>
  );
}
