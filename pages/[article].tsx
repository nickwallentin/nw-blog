import Aside from '@modules/article/components/Aside';
import Blocks from '@modules/notion/components/blocks/Blocks';
import { IArticle } from 'types/article';
import Image from 'next/image';
import SEO from '@modules/seo/components/SEO';
import articlemap from '@data/article-map.json';
import dayjs from 'dayjs';
import getArticle from '@lib/notion/getArticle';
import { prisma } from '@lib/prisma/client';
import useArticleViews from '@modules/article/hooks/useArticleViews';
import { useState } from 'react';

export const getStaticPaths = async () => {
  const paths = articlemap.map((article) => ({
    params: { article: article.preferred_slug || article.default_slug },
  }));
  await prisma.article.createMany({
    skipDuplicates: true,
    data: articlemap.map((article) => ({
      id: article.notion_id,
      slug: article.preferred_slug || article.default_slug,
    })),
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const article = await getArticle(context.params.article);

  return { props: { article } };
};

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  useArticleViews(article.id);
  console.log(article);
  return (
    <>
      <SEO title={article.title} description={article.description} />
      <div className='contain grid grid-cols-[1fr,300px] section'>
        <article className='prose-lg max-w-prose'>
          <h1>{article.title}</h1>

          <p className='font-semibold'>{article.description}</p>
          <ArticleMeta article={article} />
          <Blocks blocks={article.blocks} />
        </article>
        <Aside data={article} />
      </div>
    </>
  );
};

export default Article;
const ArticleMeta = ({ article }) => {
  return (
    <div className='flex items-center justify-between text-base '>
      <div className='flex items-center space-x-4'>
        <figure className='relative w-10 h-10 overflow-hidden rounded-full'>
          <Image
            src='/assets/media/nick-wallentin.jpeg'
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <div className='flex flex-col leading-snug'>
          <small className='opacity-40'>Written by</small>
          <p className='my-0'>Nick Wallentin</p>
        </div>
      </div>
      <div className='flex flex-col leading-snug'>
        <small className='opacity-40'>Published on</small>
        <p className='my-0'>
          {dayjs(article.published_time).format('MMM D, YYYY')}
        </p>
      </div>
    </div>
  );
};
