/**
 * Retorna la URL del backend, dependiendo del entorno en el que se esté ejecutando
 * @returns {string} - The base url of the backend
 */
export function getBaseUrl() {
  // if (typeof window !== "undefined") {
  //   return "";
  // }
  if (process.env.NEXT_PUBLIC_BACKEND_URL) {
    return `https://${process.env.NEXT_PUBLIC_BACKEND_URL}`;
  }
  return "http://localhost:3000";
}
