import getArticle from './getArticle';
import getBlocks from '@lib/notion/getBlocks';
import getNotionIDFromSlug from '@lib/utils/getNotionIDFromSlug';
import notion from '@lib/notion/notion';
import { prisma } from '@lib/prisma/client';
import seriesmap from '@data/series-map.json';
import slugify from 'slug';
export default async function getSerie(path: string, id?: boolean) {
  try {
    //Get page info
    const { notion_id } = seriesmap.find(
      (serie) => serie.preferred_slug === path || serie.default_slug === path
    );
    const pageResponse = await notion.pages.retrieve({
      page_id: notion_id,
    });
    const pageData: any = pageResponse;

    //Get blocks
    const blocks = await getBlocks(pageData.id);
    const articles = [];
    for (let article of pageData.properties.Articles.relation) {
      const articleData = await getArticle(article.id, true);
      articles.push(articleData);
    }
    const data = {
      id: pageData.id,
      slug: slugify(
        pageData.properties.Title.title.map((o) => o.plain_text).join(' ')
      ),
      title: pageData.properties.Title.title.map((o) => o.plain_text).join(' '),
      description: pageData.properties.Description.rich_text
        .map((o) => o.plain_text)
        .join(' '),
      tags: pageData.properties.Tags.multi_select.map(({ id, name }) => ({
        id,
        name,
        slug: slugify(name),
      })),
      last_edited_time: pageData.last_edited_time,
      cover: pageData.cover,
      articles,
      blocks,
    };

    return data;
  } catch (error) {
    console.log(`getPage => ${path}`, error);
    return {
      notFound: true,
    };
  }
}
