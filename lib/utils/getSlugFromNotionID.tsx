import articlesmap from '@data/article-map.json';

const getSlugFromNotionID = (id: string): string => {
  const data = articlesmap.find((article: any) => article.id === id);

  return data.preferred_slug || data.default_slug;
};
export default getSlugFromNotionID;
