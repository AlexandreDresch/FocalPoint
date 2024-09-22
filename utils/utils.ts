/**
 * Returns the current date formatted in Brazilian Portuguese (pt-BR) locale.
 * The format includes the full weekday name, numeric day, full month name, and numeric year.
 * Additionally, the first letter of the formatted date string is capitalized.
 *
 * Example output: "Segunda-feira, 01 de dezembro de 2025"
 *
 * @returns {string} - The formatted date string with the first letter capitalized.
 */
export function getTodayFullDate() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = today.toLocaleDateString("pt-BR", options);

  return fullDate.charAt(0).toUpperCase() + fullDate.slice(1);
}
