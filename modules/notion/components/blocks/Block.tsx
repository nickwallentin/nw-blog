import BulletListItem from './blocktypes/BulletListItem';
import Code from './blocktypes/Code';
import Heading from './blocktypes/Heading';
import ImageBlock from './blocktypes/ImageBlock';
import Paragraph from './blocktypes/Paragraph';
import ShowcaseComponent from './blocktypes/ShowcaseComponent';

export default function Block({ block }) {
  switch (block.type) {
    case 'paragraph':
      return <Paragraph paragraph={block.paragraph} />;
      break;
    case 'image':
      return <ImageBlock image={block.image} />;
    case 'heading_1':
      return <Heading id={block.id} heading={block.heading_1} size={2} />;
      break;
    case 'heading_2':
      return <Heading id={block.id} heading={block.heading_2} size={3} />;
      break;
    case 'heading_3':
      return <Heading id={block.id} heading={block.heading_3} size={4} />;
      break;

    case 'code':
      return <Code code={block.code} />;
    case 'bulleted_list_item':
      return <BulletListItem bullet={block.bulleted_list_item} />;
    case 'equation':
      return <ShowcaseComponent component={block.equation} />;

    default:
      return <p>{block.type}</p>;
  }
}
