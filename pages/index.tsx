import ArticleList from '@modules/articles/ArticleList';
import getArticles from '@lib/notion/getArticles';

export const getStaticProps = async (context) => {
  const articles = await getArticles();
  return { props: { articles } };
};
export default function Home({ articles }) {
  return (
    <>
      <div className='grid md:grid-cols-[1fr,300px] gap-20 contain section'>
        <ArticleList heading='Latest articles' articles={articles} />
      </div>
    </>
  );
}
