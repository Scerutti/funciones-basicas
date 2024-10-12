import React from "react";
import { WindowSize } from "./interface";

/**
 * Hook personalizado que proporciona el tamaño de la ventana del navegador en tiempo real.
 * @returns {WindowSize | undefined} - El objeto que contiene el ancho (width) y alto (height) de la ventana o undefined si el hook no se ha inicializado todavía.
 */

export function useWindowSize(): WindowSize | undefined {
  /**
   * El estado que almacena el tamaño de la ventana.
   * @type {React.State<WindowSize | undefined>}
   */
  const [windowSize, setWindowSize] = React.useState<WindowSize | undefined>();
  React.useEffect(() => {
    /**
     * Función para manejar el evento de cambio de tamaño de la ventana.
     */
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Agregar un oyente de eventos para el cambio de tamaño de la ventana.
    window.addEventListener("resize", handleResize);

    // Inicializar el tamaño de la ventana una vez al cargar el componente.
    handleResize();

    // Eliminar el oyente de eventos al desmontar el componente.
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
