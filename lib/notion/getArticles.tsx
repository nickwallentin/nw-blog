import { IArticle } from 'types/article';
import notion from './notion';
import transformArticles from '@lib/transformers/transformArticles';

const getArticles = async () => {
  try {
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
        ],
      },
    });

    let data: IArticle[] = await transformArticles(response.results);

    return data;
  } catch (error) {
    console.error('ERROR getArticles ==>', error);
    return false;
  }
};

export default getArticles;
