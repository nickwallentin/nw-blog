import Text from './Text';

export default function Paragraph({ paragraph }) {
  const { rich_text } = paragraph;

  if (!paragraph) {
    return <p>No paragraph</p>;
  }

  return (
    <p>
      {rich_text?.map((text) => {
        if (text.type === 'text') {
          return (
            <Text
              annotations={text.annotations}
              key={text.plain_text}
              text={text.text.content}
              href={text.href}
            />
          );
        } else {
          return (
            <span className='px-2 text-red-800 bg-red-200'>{text.type}</span>
          );
        }
      })}
    </p>
  );
  return <p></p>;
}
