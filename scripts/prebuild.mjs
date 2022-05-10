import dotenv from 'dotenv';
import fs from 'fs/promises';
import notion from '@notionhq/client';
import slug from 'slug';

dotenv.config();

const n = new notion.Client({
  auth: process.env.NOTION_TOKEN,
});

const writeArticlesMap = async () => {
  try {
    const response = await n.databases.query({
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

    const data = response.results.map((article) => ({
      notion_id: article.id,
      preferred_slug:
        article.properties.Slug.rich_text.length > 0
          ? article.properties.Slug.rich_text.map((o) => o.plain_text).join('-')
          : slug(
              article.properties.Title.title.map((o) => o.plain_text).join(' ')
            ),
      default_slug: slug(
        article.properties.Title.title.map((o) => o.plain_text).join(' ')
      ),
    }));
    const tags = [];
    response.results.forEach((article) => {
      article.properties.Tags.multi_select.forEach((tag) => {
        if (!tags.find((i) => i.name === tag.name)) {
          tags.push({
            name: tag.name,
            slug: slug(tag.name),
          });
        }
      });
    });
    await fs.writeFile('./data/tag-map.json', JSON.stringify(tags));
    await fs.writeFile('./data/article-map.json', JSON.stringify(data));
  } catch (error) {
    console.error('[PREBUILD ERROR] ', error);
    return;
  }
};
const writeSeriesMap = async () => {
  try {
    const response = await n.databases.query({
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
    const data = response.results.map((result) => ({
      notion_id: result.id,
      preferred_slug: result.properties.Slug.rich_text
        .map((o) => o.plain_text)
        .join('-'),
      default_slug: slug(
        result.properties.Title.title.map((o) => o.plain_text).join(' ')
      ),
    }));
    fs.writeFile('./data/series-map.json', JSON.stringify(data));
  } catch (error) {
    console.log('writeSeriesMap ERROR =>', error);
    return;
  }
};

writeArticlesMap();
writeSeriesMap();
