import Annotations from './Annotations';
import Link from 'next/link';

export default function Text({ text, annotations, href }) {
  if (href) {
    if (href.charAt(0) === '/') {
      return (
        <Link href={'/'}>
          <a className='underline'>
            <Annotations annotations={annotations}>{text}</Annotations>
          </a>
        </Link>
      );
    } else {
      return (
        <a href={href} className='underline' target='_blank' rel='noreferrer'>
          <Annotations annotations={annotations}>{text}</Annotations>
        </a>
      );
    }
  }

  return <Annotations annotations={annotations}>{text}</Annotations>;
}
