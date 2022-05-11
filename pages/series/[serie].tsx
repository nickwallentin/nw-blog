import Blocks from '@modules/notion/components/blocks/Blocks';
import getSerie from '@lib/notion/getSerie';

export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};
export const getStaticProps = async (context) => {
  const serie = await getSerie(context.params.serie);
  console.log('SERIE =>', serie);
  return { props: { serie } };
};
interface SeriePageProps {
  serie: any;
}

const SeriePage = ({ serie }: SeriePageProps) => {
  return (
    <>
      <div className='layout'>
        <article className='article'>
          <p className='section-label'>Series</p>
          <h1 className='mb-5'>{serie.title}</h1>
          <p className='pb-10 border-b article-intro dark:border-b-white/10'>
            {serie.description}
          </p>
          <div className='mt-10'>
            <Blocks blocks={serie.blocks} />
          </div>
        </article>
      </div>
    </>
  );
};

export default SeriePage;
