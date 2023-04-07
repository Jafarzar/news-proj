import React from "react";
import {
  Box,
  Text,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

interface Article {
  title: string;
  url: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
  content: string;
}

const getArticle = async (title: string): Promise<Article> => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      title
    )}&apiKey=ffa9fbf9e7044b41a8fbfb53fef3541e`
  );
  const data = await response.json();

  if (data.status === "ok" && data.articles.length > 0) {
    return data.articles[0];
  } else {
    throw new Error(`No article found with title "${title}"`);
  }
};

const NewsDetails: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;

  const { data, isLoading, isError } = useQuery(["article", title], () =>
    getArticle(title as string)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error fetching article data.</p>;
  }

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" fontWeight="bold" mb={2}>
        {data?.title}
      </Heading>
      <Text color="gray.500" fontSize="sm" mb={4}>
        {data?.publishedAt}
      </Text>
      <Text fontSize="md" mb={4}>
        {data?.description}
      </Text>
      <Text fontSize="lg" mb={4}>
        {data?.content}
      </Text>
    </Box>
  );
};

export default NewsDetails;
