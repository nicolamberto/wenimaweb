import { useEffect } from "react";

export function useScrollToTopOnLoad() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
}
