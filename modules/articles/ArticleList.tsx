import { IArticle } from 'types/article';
import Link from 'next/link';
import dayjs from 'dayjs';

interface ArticleListProps {
  articles: IArticle[];
  heading?: string;
}

const ArticleList = ({ heading, articles }: ArticleListProps) => {
  if (!articles) {
    <p>No articles found.</p>;
  }
  return (
    <section className=''>
      {heading && <h2 className='mb-5 section-label'>{heading}</h2>}
      <ul className='space-y-10 '>
        {articles?.map((article) => (
          <li key={article.id} className='group'>
            <article>
              <h3 className='mb-5'>
                <Link href={article.path}>
                  <a>{article.title}</a>
                </Link>
              </h3>

              <p className='mb-5'>{article.description}</p>
              <Link href={article.path}>
                <a className='text-link'>
                  <span>Read more</span>
                </a>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
