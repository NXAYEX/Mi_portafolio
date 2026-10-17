import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de página sin ancla, vuelve arriba (el router no lo hace solo).
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
