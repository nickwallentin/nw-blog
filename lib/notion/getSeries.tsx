import { IArticle } from 'types/article';
import notion from './notion';
import transformArticles from '@lib/transformers/transformArticles';
import transformSeries from '@lib/transformers/transformSeries';

const getSeries = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB_SERIES,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
        ],
      },
    });

    let data = await transformSeries(response.results);
    console.log('SERIES DATA =>', data);
    return data;
  } catch (error) {
    console.error('ERROR getSeries ==>', error);
    return false;
  }
};

export default getSeries;
