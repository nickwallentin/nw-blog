export default function Excerpt({ excerpt }) {
  const text = excerpt.rich_text.map((part) => part.plain_text).join(' ');
  return <>{text}</>;
}
