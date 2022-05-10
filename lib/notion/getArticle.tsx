import getBlocks from '@lib/notion/getBlocks';
import getNotionIDFromSlug from '@lib/utils/getNotionIDFromSlug';
import notion from '@lib/notion/notion';
import { prisma } from '@lib/prisma/client';
import slugify from 'slug';
export default async function getArticle(path: string) {
  try {
    //Get page info
    const notion_id = getNotionIDFromSlug(path);
    const pageResponse = await notion.pages.retrieve({
      page_id: notion_id,
    });
    const pageData: any = pageResponse;

    //Get blocks
    const blocks = await getBlocks(pageData.id);
    const additionalData = await prisma.article.findUnique({
      where: { id: notion_id },
      select: { views: true },
    });
    console.log(additionalData);
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
      published_time: pageData.properties['Date Published'].date.start,
      last_edited_time: pageData.last_edited_time,
      cover: pageData.cover,
      blocks,
      stats: {
        views: additionalData?.views || 0,
      },
    };

    return data;
  } catch (error) {
    console.log(`getPage => ${path}`, error);
    return {
      notFound: true,
    };
  }
}
