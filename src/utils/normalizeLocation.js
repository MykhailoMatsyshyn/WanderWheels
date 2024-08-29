export default function normalizeLocation(location) {
  const parts = location.split(",").map((part) => part.trim());

  if (parts.length === 2) {
    const [part1, part2] = parts;

    if (part2.match(/Ukraine/i)) {
      return `${part2}, ${part1}`;
    }
  }

  return location;
}
