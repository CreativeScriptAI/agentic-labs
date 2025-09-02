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
export * from "./youtube";

export const detectUserCountry = async (): Promise<string | null> => {
  try {
    const response = await fetch("/api/geolocation");
    const data = await response.json();
    console.log("data", data);
    return data.country_code || null;
  } catch (error) {
    console.error("Error detecting user country:", error);
    return null;
  }
};
