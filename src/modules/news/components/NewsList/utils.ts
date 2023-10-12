import { Article } from "../../../../redux/api/news/types";

export const formatArticlesData = (articles: Article[] | undefined) => {
  if (!articles) {
    return [];
  }
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  return articles.map((article) => {
    return {
      ...article,
      publishedAt: new Date(article.publishedAt).toLocaleDateString(
        undefined,
        dateOptions
      ),
      source: article.source.name,
    };
  });
};
