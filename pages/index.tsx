import ArticleList from '@modules/articles/ArticleList';
import getArticles from '@lib/notion/getArticles';

export const getStaticProps = async (context) => {
  const articles = await getArticles();
  return { props: { articles } };
};
export default function Home({ articles }) {
  return (
    <>
      <div className='layout'>
        <ArticleList heading='Latest articles' articles={articles} />
      </div>
    </>
  );
}
