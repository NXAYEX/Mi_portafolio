import { useState } from "react";
import { Moon, Sun } from "lucide-react";

// Alterna entre modo claro y oscuro. La clase "dark" vive en <html> y la elección se recuerda en el navegador.
function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Sin almacenamiento disponible, el tema solo dura mientras la página está abierta
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink transition-colors hover:bg-lavender hover:text-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
