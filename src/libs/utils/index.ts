export function formatDate(date: string | Date, locale: string) {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const res = d.toLocaleDateString(locale, options);
  return res;
}

export * from "./agent";
