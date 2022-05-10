import { IArticle } from 'types/article';
import notion from './notion';
import { prisma } from '@lib/prisma/client';
import slug from 'slug';
import tagmap from '@data/tag-map.json';
import transformArticles from '@lib/transformers/transformArticles';
const getArticlesByTag = async (tag: string) => {
  try {
    const tag_match = tagmap.find((obj) => obj.slug === tag);
    if (!tag_match) {
      return false;
    }
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB_ARTICLES,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
          {
            property: 'Date Published',
            date: {
              is_not_empty: true,
            },
          },
          {
            property: 'Tags',
            multi_select: {
              contains: tag_match.name,
            },
          },
        ],
      },
    });

    let data: IArticle[] = await transformArticles(response.results);

    return data;
  } catch (error) {
    console.error('ERROR getArticlesByTag ==>', error);
    return false;
  }
};

export default getArticlesByTag;
