import Block from './Block';

export default function Blocks({ blocks }) {
  return blocks.map((block) => <Block key={block.id} block={block} />);
}
