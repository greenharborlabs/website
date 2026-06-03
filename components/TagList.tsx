export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tag-list" aria-label="Technology tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
