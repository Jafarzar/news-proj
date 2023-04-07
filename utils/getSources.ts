export interface SourceResponse {
  status: string;
  sources: Source[];
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export const getSources = async (): Promise<SourceResponse> => {
  const url = new URL(
    "https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=ffa9fbf9e7044b41a8fbfb53fef3541e"
  );

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "ok") {
    return data;
  } else {
    throw new Error(data.message);
  }
};
