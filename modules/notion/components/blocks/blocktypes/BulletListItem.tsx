import Text from '@modules/notion/components/blocks/blocktypes/Text';
interface BulletListItemProps {
  bullet: any;
}

const BulletListItem = ({ bullet }: BulletListItemProps) => {
  return (
    <li>
      {bullet.rich_text.map(({ text, annotations, href }) => (
        <Text href={href} text={text.content} annotations={annotations} />
      ))}
    </li>
  );
};

export default BulletListItem;
