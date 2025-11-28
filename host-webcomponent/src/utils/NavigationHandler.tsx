import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NavigationHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.path) {
        navigate(customEvent.detail.path);
      }
    };

    window.addEventListener("navigate", handleNavigate);
    return () => window.removeEventListener("navigate", handleNavigate);
  }, [navigate]);

  return null;
};
