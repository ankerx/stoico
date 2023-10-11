type Source = {
  id: string;
  name: string;
};

type Article = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
