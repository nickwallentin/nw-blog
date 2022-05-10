import ArticleList from '@modules/articles/ArticleList';
import { IArticle } from 'types/article';
import getArticlesByTag from '@lib/notion/getArticlesByTag';
import tagmap from '@data/tag-map.json';

export const getStaticPaths = async () => {
  const paths = tagmap.map((tag) => ({ params: { tag: tag.slug } }));
  return { paths: paths, fallback: 'blocking' };
};
export const getStaticProps = async (context) => {
  const articles = await getArticlesByTag(context.params.tag);
  const tag = tagmap.find((tag) => tag.slug === context.params.tag);
  return { props: { articles, tag } };
};

interface TagArchivePageProps {
  tag: any;
  articles: IArticle[];
}

const TagArchivePage = ({ tag, articles }: TagArchivePageProps) => {
  return (
    <>
      <section className=' section-sm contain'>
        <p className='section-label'>Articles</p>
        <h1>{tag.name}</h1>
      </section>
      <section className='contain section-sm'>
        <ArticleList articles={articles} />
      </section>
    </>
  );
};

export default TagArchivePage;
