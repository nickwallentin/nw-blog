export default function Annotations({ children, annotations }) {
  const { bold, italic, strikethrough, underline, color } = annotations;
  if (bold) return <strong>{children}</strong>;
  if (italic) return <em>{children}</em>;
  if (strikethrough) return <del>{children}</del>;
  if (underline) return <ins>{children}</ins>;
  if (color === 'gray') {
    return <span className={`text-gray-500`}>{children}</span>;
  }
  if (color === 'gray_background') {
    return <span className={`text-white bg-gray-500`}>{children}</span>;
  }
  if (color === 'brown') {
    return <span className={`text-yellow-600`}>{children}</span>;
  }
  if (color === 'brown_background') {
    return <span className={`text-white bg-yellow-600`}>{children}</span>;
  }
  if (color === 'orange') {
    return <span className={` text-yellow-500`}>{children}</span>;
  }
  if (color === 'orange_background') {
    return <span className={`text-white bg-yellow-500`}>{children}</span>;
  }
  if (color === 'yellow') {
    return <span className={` text-yellow-400`}>{children}</span>;
  }
  if (color === 'yellow_background') {
    return <span className={`text-white bg-yellow-400`}>{children}</span>;
  }
  if (color === 'green') {
    return <span className={` text-green-500`}>{children}</span>;
  }
  if (color === 'green_background') {
    return <span className={`text-white bg-green-500`}>{children}</span>;
  }
  if (color === 'blue') {
    return <span className={` text-blue-500`}>{children}</span>;
  }
  if (color === 'blue_background') {
    return <span className={`text-white bg-blue-500`}>{children}</span>;
  }
  if (color === 'purple') {
    return <span className={` text-purple-500`}>{children}</span>;
  }
  if (color === 'purple_background') {
    return <span className={`text-white bg-purple-500`}>{children}</span>;
  }
  if (color === 'pink') {
    return <span className={` text-pink-500`}>{children}</span>;
  }
  if (color === 'pink_background') {
    return <span className={`text-white bg-pink-500`}>{children}</span>;
  }
  if (color === 'red') {
    return <span className={` text-red-500`}>{children}</span>;
  }
  if (color === 'red_background') {
    return <span className={`text-white bg-red-500`}>{children}</span>;
  }
  return <>{children}</>;
}
