export interface Article {
  title: string;
  url: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export type NewsCategory =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

export type GetNewsProps =
  | {
      key: "CATEGORY";
      category: NewsCategory;
    }
  | { key: "SOURCE"; source: string };

export const MAX_NEWS = 10;

export const getNews = async (
  props: GetNewsProps
): Promise<NewsApiResponse> => {
  const url = new URL(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffa9fbf9e7044b41a8fbfb53fef3541e"
  );

  if (props.key === "CATEGORY") {
    url.searchParams.append("category", props.category);
  }
  if (props.key === "SOURCE") {
    url.searchParams.append("category", props.source);
  }

  url.searchParams.append("pageSize", String(MAX_NEWS));

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "ok") {
    return data;
  } else {
    throw new Error(data.message);
  }
};
