export function formatLocation(location) {
  const [country, city] = location.split(", ");
  return `${city}, ${country}`;
}
