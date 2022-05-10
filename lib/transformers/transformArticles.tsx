import { IArticle } from 'types/article';
import { prisma } from '@lib/prisma/client';
import slug from 'slug';

const transformArticles = async (init: any[]) => {
  const results = [];
  const data = init.map((article) => {
    return {
      id: article.id,
      cover: article.cover,
      title: article.properties.Title.title.map((o) => o.plain_text).join(' '),
      date_published:
        article?.properties['Date Published']?.date?.start || null,
      last_edited_time: article.last_edited_time,
      description: article.properties.Description.rich_text
        .map((o) => o.plain_text)
        .join(' '),
      tags: article.properties.Tags.multi_select.map((tag) => ({
        name: tag.name,
        path: `/${slug(tag.name)}`,
      })),
      path:
        '/' +
          article.properties.Slug.rich_text
            .map((o) => o.plain_text)
            .join('-') ||
        slug(article.properties.Title.title.map((o) => o.plain_text).join(' ')),
    };
  });
  for (let article of data) {
    const { views } = await prisma.article.findUnique({
      where: {
        id: article.id,
      },
      select: {
        views: true,
      },
    });
    results.push({ ...article, stats: { views } });
  }
  return results;
};
export default transformArticles;
