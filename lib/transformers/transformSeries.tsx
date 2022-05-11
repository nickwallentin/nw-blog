import getArticle from '@lib/notion/getArticle';
import getBlocks from '@lib/notion/getBlocks';
import slugify from 'slug';
export default async function transformSeries(array) {
  try {
    let series = [];
    for (let item of array) {
      let articles = [];
      for (let article of item.properties.Articles.relation) {
        const data = await getArticle(article.id, true);

        articles.push(data);
      }
      console.log('ARTICLES =>', articles);
      const blocks = await getBlocks(item.id);
      const slug =
        item.properties.Slug.rich_text.map((o) => o.plain_text).join('-') ||
        slugify(item.properties.Title.title.map((o) => o.plain_text).join(' '));
      let obj = {
        title: item.properties.Title.title.map((o) => o.plain_text).join(' '),
        slug: slug,
        path: '/' + slug,
        description: item.properties.Description.rich_text
          .map((o) => o.plain_text)
          .join(' '),
        articles: articles,
        cover: item.cover,
      };

      series.push(obj);
    }

    return series;
  } catch (error) {
    console.error('ERROR =>', error);
    return null;
  }
}
