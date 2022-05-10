import articlesmap from '@data/article-map.json';

const getNotionIDFromSlug = (slug: string): string => {
  const data = articlesmap.find(
    (article: any) =>
      article.preferred_slug === slug || article.default_slug === slug
  );

  return data.notion_id;
};
export default getNotionIDFromSlug;
