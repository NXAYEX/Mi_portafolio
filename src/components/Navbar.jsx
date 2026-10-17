import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className={`flex items-center gap-3 ${focusRing}`}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-extrabold text-mint">
            NP
          </span>
          <span className="font-display text-lg font-extrabold uppercase tracking-wide">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`font-display text-lg font-extrabold uppercase tracking-wide hover:underline hover:decoration-4 hover:decoration-mint hover:underline-offset-4 ${focusRing}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className={`grid h-10 w-10 place-items-center rounded-full border-2 border-ink hover:bg-mint md:hidden ${focusRing}`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal móvil" className="border-t-2 border-ink md:hidden">
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={href} className="border-b border-line last:border-b-0">
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-4 font-display text-xl font-extrabold uppercase hover:bg-mint ${focusRing}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
