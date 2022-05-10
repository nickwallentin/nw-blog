import Link from 'next/link';
import useHeadingsInViewStore from '@store/useHeadingsInView';

interface AsideProps {
  data: any;
}

const Aside = ({ data }: AsideProps) => {
  const headings = data?.blocks?.filter((block) =>
    block.type.includes('heading')
  );

  return (
    <aside className='relative'>
      <div className='sticky space-y-10 top-10'>
        <TableOfContents headings={headings} />
        <Tags tags={data.tags} />
      </div>
    </aside>
  );
};

export default Aside;

const TableOfContents = ({ headings }) => {
  const headingsInView = useHeadingsInViewStore((state: any) => state.inView);
  if (headings.length === 0) {
    return null;
  }
  return (
    <section className='transition-all group '>
      <h4 className='section-label'>Table of contents</h4>
      <ul className='mt-3 space-y-2'>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`transition-all opacity-40 hover:opacity-100 ${
              headingsInView.includes(heading.id) ? 'opacity-100 ' : null
            }`}
          >
            <HeadingLink heading={heading} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const HeadingLink = ({ heading }) => {
  const handleLink = () => {
    const el = document.getElementById(heading.id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <button onClick={() => handleLink()}>
      {heading[heading.type].rich_text.map(({ text }) => text.content)}
    </button>
  );
};

const Tags = ({ tags }) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <section className='transition-all '>
      <h4 className='section-label'>Tags</h4>
      <ul className='flex items-center mt-3'>
        {tags.map((tag) => (
          <li className='mr-2 last:mr-0 group'>
            <Link href={`/tag/${tag.slug}`}>
              <a className='block px-2 transition-all rounded dark:group-hover:text-white/100 group-hover:text-black/100 dark:group-hover:bg-white/10 group-hover:bg-black/10 bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40'>
                {tag.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
