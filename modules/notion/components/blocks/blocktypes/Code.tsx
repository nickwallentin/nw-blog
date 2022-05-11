import Prism from 'prismjs';
import { useEffect } from 'react';
interface CodeProps {
  code: any;
}

const Code = ({ code }: CodeProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className='w-[100%]'>
      <code className={`w-full language-${code.language}`}>
        {code.rich_text.map(({ text }) => text.content).join(' ')}
      </code>
    </pre>
  );
};

export default Code;
